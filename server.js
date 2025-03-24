import express from 'express';
import { Telegraf } from 'telegraf';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import { config } from './configBot.js';

const app = express();
const bot = new Telegraf(config.BOT_TOKEN);
const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

// ========== Middleware ==========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security headers middleware
app.use((req, res, next) => {
  res.header('X-Powered-By', 'Gavanskaya AutoSchool');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  next();
});

// CORS configuration
app.use(cors({
  origin: [
    'https://gavanskaya.ru',
    'https://www.gavanskaya.ru',
    'http://localhost:5173' // Для локальной разработки
  ],
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors());

// Trust proxy from Nginx
app.set('trust proxy', true);

// ========== Routes ==========
app.post('/api/submit-application', async (req, res) => {
  try {
    const { name, phone, category } = req.body;
    
    // Валидация данных
    if (!name?.trim() || !phone?.trim() || !category?.trim()) {
      return res.status(400).json({ 
        success: false,
        error: 'Все поля обязательны для заполнения'
      });
    }

    // Сохранение в Supabase
    const { data, error } = await supabase
      .from('applications')
      .insert([{ 
        name: name.trim(),
        phone: phone.trim(),
        category: category.trim() 
      }])
      .select();

    if (error) {
      console.error('Supabase Error:', error);
      throw new Error('Database operation failed');
    }

    // Отправка в Telegram
    const message = `📝 Новая заявка!\nИмя: ${name}\nТел: ${phone}\nКатегория: ${category}`;
    await bot.telegram.sendMessage(config.CHAT_ID, message);
    
    // Успешный ответ
    res.json({ 
      success: true,
      applicationId: data[0].id,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ 
      success: false,
      error: config.NODE_ENV === 'development' 
        ? error.message 
        : 'Внутренняя ошибка сервера'
    });
  }
});

// ========== Health Check ==========
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    env: config.NODE_ENV,
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// ========== Error Handling ==========
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Ресурс не найден'
  });
});

app.use((err, req, res, next) => {
  console.error('Global Error:', err);
  res.status(500).json({ 
    success: false,
    error: 'Критическая ошибка системы'
  });
});

// ========== Server Startup ==========
app.listen(config.PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${config.PORT}`);
  console.log(`⚙️  Режим: ${config.NODE_ENV}`);
  console.log(`🌐 Доступен по адресу: https://gavanskaya.ru/api`);
});