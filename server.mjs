import express from 'express';
import { Telegraf } from 'telegraf';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import { config } from './config.js';
import https from 'https';
import fs from 'fs';

const app = express();
const port = config.PORT || 3001;

const botToken = config.BOT_TOKEN;
const chatId = config.CHAT_ID;
const additionalChatId = '1933951731'; // Новый chatId

const bot = new Telegraf(botToken);

const supabaseUrl = config.SUPABASE_URL;
const supabaseKey = config.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(bodyParser.json());

// Настройка CORS с разрешением всех источников (временно, для тестирования)
app.use(cors({
    origin: '*', // Позволяет любые источники (не безопасно для продакшена)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.post('/send-message', async (req, res) => {
    const { message, orderDetails } = req.body;
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];

    try {
        // Получение user_id из базы данных
        const { data: userData, error: userError } = await supabase.auth.getUser(token);

        if (userError) {
            console.error('Error fetching user_id:', userError);
            throw userError;
        }

        if (!userData || !userData.user) {
            console.error('No user found in the database');
            throw new Error('No user found in the database');
        }

        const userId = userData.user.id;
        console.log(`Fetched user_id: ${userId}`);

        // Извлечение информации из таблицы users
        const { data: userItemsData, error: userItemsError } = await supabase
            .from('users')
            .select('items, cost_items')
            .eq('user_id', userId)
            .single();

        if (userItemsError) {
            console.error('Error fetching user items:', userItemsError);
            throw userItemsError;
        }

        console.log('Fetched user items data:', userItemsData);

        if (!userItemsData || userItemsData.length === 0) {
            console.error('No user items found in the database');
            throw new Error('No user items found in the database');
        }

        const items = userItemsData.items;
        const costItems = userItemsData.cost_items;
        console.log('Fetched items:', items);

        const itemsMessage = items.map(item => `Название: ${item.title}, Количество: ${item.count}, Вкус: ${item.flavor}`).join('\n');

        // Генерация пятизначного номера заказа
        const { data: orders, error: ordersError } = await supabase
            .from('orders')
            .select('order_number')
            .order('order_number', { ascending: false })
            .limit(1);

        if (ordersError) {
            console.error('Error fetching orders:', ordersError);
            throw ordersError;
        }

        let orderNumber = '00001';
        if (orders && orders.length > 0) {
            const lastOrderNumber = parseInt(orders[0].order_number, 10);
            orderNumber = String(lastOrderNumber + 1).padStart(5, '0');
        }

        console.log(`Generated order number: ${orderNumber}`);

        // Сохранение номера заказа в базу данных
        const { data: insertData, error: insertError } = await supabase
            .from('orders')
            .insert({ user_id: userId, order_number: orderNumber, order_condition: 'Создан', order_items: items, cost_items: costItems })
            .select();

        if (insertError) {
            console.error('Error inserting order number:', insertError);
            throw insertError;
        }

        console.log('Insert data:', insertData);

        if (!insertData || insertData.length === 0) {
            console.error('No rows inserted in the database');
            throw new Error('No rows inserted in the database');
        }

        console.log(`Order number ${orderNumber} saved to database for user ${userId}`);

        // Проверка наличия объекта orderDetails и всех необходимых полей
        console.log('Order details:', orderDetails);
        if (!orderDetails || !orderDetails.name || !orderDetails.address || !orderDetails.phone) {
            throw new Error('Missing order details');
        }

        const { name, address, phone } = orderDetails;

        // Включение номера заказа и информации о товарах в сообщение
        const fullMessage = `
            Номер заказа: ${orderNumber}
            ${message}
            Товары:
            ${itemsMessage}
            Общая стоимость: ${costItems} руб
            Информация о заказе:
            Имя: ${name}
            Адрес: ${address}
            Телефон: ${phone}
        `;

        console.log(`Full message to send: ${fullMessage}`);

        // Отправка сообщения в основной чат
        await bot.telegram.sendMessage(chatId, fullMessage);

        // Отправка сообщения в дополнительный чат
        await bot.telegram.sendMessage(additionalChatId, fullMessage);

        res.status(200).json({ message: 'Message sent successfully', items });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: `Error sending message: ${error.message}`, details: error.details, hint: error.hint, code: error.code });
    }
});

// Использование '0.0.0.0' для прослушивания всех сетевых интерфейсов
const host = config.HOST || '0.0.0.0';

// Чтение сертификатов
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/panacea-store.ru/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/panacea-store.ru/fullchain.pem')
};

// Создание HTTPS сервера
https.createServer(options, app).listen(port, host, () => {
    console.log(`Server is running on https://${host}:${port}`);
});