import express from 'express';
import { Telegraf } from 'telegraf';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import { config } from './configBot.js';

const app = express();
const PORT = 3001;

// Инициализация
const bot = new Telegraf(config.BOT_TOKEN);
const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Роут для получения заявок
app.post('/submit-application', async (req, res) => {
  const { name, phone, category } = req.body;

  try {
    // Сохраняем в Supabase
    const { data, error } = await supabase
      .from('applications')
      .insert([{ name, phone, category }])
      .select();

    if (error) throw error;

    // Отправляем в Telegram
    const message = `
      Новая заявка!
      Имя: ${name}
      Телефон: ${phone}
      Категория: ${category}
      ID заявки: ${data[0].id}
    `;
    
    await bot.telegram.sendMessage(config.CHAT_ID, message);
    res.status(200).json({ success: true });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});