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

// Безопасность: Настройка CSP
app.use((req, res, next) => {
  const csp = `
    default-src 'self' https:;
    connect-src 'self' https: ${config.NODE_ENV === 'development' ? 'http://localhost:3001' : ''};
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    font-src 'self' data:;
    img-src 'self' data:;
  `.replace(/\s+/g, ' ').trim();

  res.header('Content-Security-Policy', csp);
  res.header('X-Powered-By', 'Gavanskaya AutoSchool');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  next();
});

// CORS
app.use(cors({
  origin: [
    'https://gavanskaya.ru',
    'http://localhost:5173' // Порт вашего клиентского приложения
  ],
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.set('trust proxy', true);

// ========== Маршруты ==========
app.post('/api/submit-application', async (req, res) => {
  try {
    const { name, phone, category } = req.body;
    
    if (!name?.trim() || !phone?.trim() || !category?.trim()) {
      return res.status(400).json({ 
        success: false,
        error: 'Все поля обязательны'
      });
    }

    const { data, error: dbError } = await supabase
      .from('applications')
      .insert([{ 
        name: name.trim(),
        phone: phone.trim(),
        category: category.trim() 
      }])
      .select();

    if (dbError) {
      console.error('Supabase Error:', dbError);
      throw new Error('Database error');
    }

    await bot.telegram.sendMessage(config.CHAT_ID, 
      `📝 Новая заявка!\nИмя: ${name}\nТел: ${phone}\nКатегория: ${category}`
    );

    res.status(201).json({ 
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
        : 'Внутренняя ошибка'
    });
  }
});

// ========== Запуск сервера ==========
app.listen(config.PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${config.PORT}`);
  console.log(`🌐 Доступ: ${config.NODE_ENV === 'production' 
    ? 'https://gavanskaya.ru/api' 
    : `http://localhost:${config.PORT}/api`
  }`);
});