# 🚀 Финальная инструкция по деплою

## Проблема и решение

Render пытается собрать проект из корневой директории. Нужно создать отдельные репозитории.

## 📋 Новая структура

### 1. Backend (gem-admin-server)
Создать новый репозиторий только для backend:
```
gem-admin-server/
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

### 2. Frontend (gem-admin-panel)
Оставить только frontend:
```
gem-admin-panel/
├── src/
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── README.md
```

## 🛠️ Шаг 1: Создать backend репозиторий

1. **Создать новый репозиторий на GitHub:**
   - Название: `gem-admin-server`
   - Описание: `Backend server for Gem Admin Panel`

2. **Создать локально:**
```bash
cd admin-panel/server
git init
git remote add origin https://github.com/A1VEN23/gem-admin-server.git
git add .
git commit -m "Initial commit - Backend server"
git push -u origin master
```

## 🛠️ Шаг 2: Обновить frontend репозиторий

1. **Удалить папку server из admin-panel:**
```bash
cd admin-panel
rm -rf server
git add .
git commit -m "Remove server folder - will be deployed separately"
git push
```

## 🛠️ Шаг 3: Деплой на Render

### Backend:
1. Перейти на [render.com](https://render.com)
2. Создать "New Web Service"
3. Подключить репозиторий `gem-admin-server`
4. **Build Command:** `npm install`
5. **Start Command:** `node server.js`
6. Environment variables:
   - `PORT`: `3002`
   - `NODE_ENV`: `production`

### Frontend:
1. Перейти на [vercel.com](https://vercel.com)
2. Импортировать репозиторий `gem-admin-panel`
3. Environment variables:
   - `VITE_API_URL`: `https://ваш-backend-url.onrender.com`

## 🛠️ Шаг 4: Настроить Telegram

1. **Создать бота:**
   - @BotFather → `/newbot`
   - Название: `Gem Admin Bot`
   - Username: `gem_admin_bot`

2. **Создать Mini App:**
   - @BotFather → `/newapp`
   - Выбрать бота
   - URL: `https://gem-admin-panel.vercel.app`

3. **Настроить кнопку меню:**
   - @BotFather → `/mybots`
   - Выбрать бота
   - `/setmenubutton` → "Open Mini App"

## 🔧 Обновить кошелек

В `.env` файле кошелька:
```
VITE_ADMIN_SERVER_URL=https://ваш-backend-url.onrender.com
```

## ✅ Проверка

1. Backend: `https://ваш-backend-url.onrender.com/api/stats`
2. Frontend: `https://gem-admin-panel.vercel.app`
3. Telegram Mini App: Открыть бота и нажать кнопку меню

## 📞 Если есть проблемы

1. Проверить логи на Render
2. Проверить логи на Vercel
3. Убедиться что URL в frontend правильный
4. Проверить что webhook URL в кошельке правильный
