# 🎓 React Router + TypeScript Проєкт !!!

## Особливості

- 🚀 Рендерінг на стороні сервера
- ⚡️ Гаряча заміна модулів (HMR)
- 📦 Пакування та оптимізація активів
- 🔄 Завантаження даних та мутації
- 🔒 TypeScript за замовчуванням
- 🎉 TailwindCSS для стилізації
- 📖 [React Router docs](https://reactrouter.com/)

## Початок роботи

### Встановлення

1. Встанови Node.js: https://nodejs.org  

2. Встановіть залежності:

`npm install`


3. Запусти проєкт:

`npm run dev` в терміналі VS Code

(або `npm run start`, залежно від налаштувань)

Вебсайт стане доступним за посиланням: `http://localhost:5173`.

---

## 🧭 Роутинг (React Router)

Сторінки підключені в `app/routes.ts`.  
Кожна сторінка — це окремий файл у `app/routes/`.

---

## 📁 Основні папки

- `app/routes/` — сторінки
- `app/src/` — UI-компоненти
- `app/routes.ts` — конфігурація роутів
- `app/root.tsx` — root layout / обгортка
- `public/` — статичні файли (зображення і т.д.)

---

## Styling

У проекті використовується [Tailwind CSS](https://tailwindcss.com/) та scss для стилізації. 

---

## Deployment
Docker Deployment

To build and run using Docker:

docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app

The containerized application can be deployed to any platform that supports Docker, including:

    AWS ECS
    Google Cloud Run
    Azure Container Apps
    Digital Ocean App Platform
    Fly.io
    Railway

