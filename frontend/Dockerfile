#какой образ использовать — Node.js 20
FROM node:20-alpine
#рабочая папка внутри контейнера
WORKDIR /app
#копируем файлы зависимостей
COPY package*.json ./
#устанавливаем зависимости
RUN npm install
#копируем весь код frontend
COPY . .
#какой порт будет открываться
EXPOSE 5173
#команда для запуска
CMD ["npm", "run", "dev", "--", "--host"]