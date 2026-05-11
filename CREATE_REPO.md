# 📝 Создание GitHub репозитория

## Инструкция для A1VEN23

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Название репозитория: `gem-admin-panel`
3. Описание: `Gem Wallet Admin Panel - Telegram Mini App for user and balance management`
4. Выберите **Public**
5. **НЕ** выбирайте "Add a README file" (у нас уже есть)
6. Нажмите **Create repository**

### Шаг 2: Свяжите локальный репозиторий с GitHub

```bash
cd admin-panel
git remote add origin https://github.com/A1VEN23/gem-admin-panel.git
git branch -M master
git push -u origin master
```

### Шаг 3: Проверьте, что всё загрузилось

Перейдите на https://github.com/A1VEN23/gem-admin-panel

Вы должны увидеть все файлы проекта.

## 🎉 После создания репозитория

1. Деплой Backend на Render
2. Деплой Frontend на Vercel
3. Настройте Telegram Mini App
4. Интегрируйте с кошельком

## 📋 Структура репозитория

```
gem-admin-panel/
├── src/                    # Frontend React
├── server/                # Backend Node.js
├── DEPLOYMENT.md          # Инструкция деплоя
├── QUICKSTART.md          # Быстрый старт
├── INTEGRATION.md         # Интеграция
└── README.md
```

После успешного создания репозитория сообщите мне, и я помогу с следующими шагами!
