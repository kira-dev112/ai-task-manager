#какой образ использовать — Node.js 20
FROM node:20-alpine 
#рабочая папка внутри контейнера
WORKDIR /app
#копируем файлы зависимостей
COPY package*.json ./
#устанавливаем зависимости
RUN npm install
#копируем весь код backend
COPY . .
#какой порт будет открыватся
EXPOSE 3000
#команда для запуска
CMD ["npm", "run", "dev"]