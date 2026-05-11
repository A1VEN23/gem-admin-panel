# 🚀 ДЕПЛОЙ СЕЙЧАС - ИНСТРУКЦИЯ

## ✅ Готово:
- Backend репозиторий создан и код загружен
- Frontend репозиторий обновлен (без папки server)

---

## 📋 ДЕЙСТВИЯ (через веб-интерфейс):

### 1. Деплой Backend на Render (5 минут)
1. Откройте: https://render.com
2. Войдите через GitHub
3. Нажмите **New + → Web Service**
4. Выберите репозиторий **gem-admin-server**
5. Настройки:
   - Name: `gem-admin-server`
   - Region: `Oregon`
   - Branch: `master`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Instance Type: `Free`
6. Environment Variables:
   - `PORT`: `3002`
   - `NODE_ENV`: `production`
7. Нажмите **Create Web Service**

**Ждите 2-3 минуты деплоя**

### 2. Деплой Frontend на Vercel (3 минуты)
1. Откройте: https://vercel.com
2. Войдите через GitHub
3. Нажмите **Add New... → Project**
4. Выберите репозиторий **gem-admin-panel**
5. Настройки:
   - Framework Preset: `Vite`
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Environment Variables:
   - `VITE_API_URL`: `https://gem-admin-server.onrender.com`
7. Нажмите **Deploy**

### 3. Настроить Telegram Mini App (5 минут)
1. В Telegram найдите @BotFather
2. Создайте бота: `/newbot`
   - Name: `Gem Admin Bot`
   - Username: `gem_admin_bot`
3. Создайте Mini App: `/newapp`
   - Выберите вашего бота
   - Short Name: `gem-admin`
   - Title: `Gem Admin Panel`
   - URL: `https://gem-admin-panel.vercel.app`
4. Настройте кнопку меню: `/mybots` → выберите бота → `/setmenubutton`

---

## 🔗 РЕЗУЛЬТАТ:

После деплоя у вас будут ссылки:
- Backend: `https://gem-admin-server.onrender.com`
- Frontend: `https://gem-admin-panel.vercel.app`
- Telegram Mini App через бота

---

## ✅ ПРОВЕРКА:

1. Backend: откройте `https://gem-admin-server.onrender.com/api/stats`
2. Frontend: откройте `https://gem-admin-panel.vercel.app`
3. Telegram: откройте бота и нажмите кнопку меню

---

## 🎉 ГОТОВО!

У вас будет работающая админ панель:
- 🎨 Красивый интерфейс
- 📊 Статистика в реальном времени
- 👥 Управление пользователями
- 💰 Балансы и транзакции
- 🔔 Уведомления из кошелька

**Всё готово к деплою! Следуйте инструкции выше.**
