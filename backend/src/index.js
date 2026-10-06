let express = require('express'); //подключаем express
let cors = require('cors'); //подключаем cors
require('dotenv').config(); //читаем .env
let tasksRouter = require('./routes/tasks'); //подключаем роутер задач

let app = express(); //создаём приложение

app.use(cors()); //разрешаем запросы с других серверов
app.use(express.json()); //учим сервер читать джсон из тела запроса
app.use('/tasks', tasksRouter); //все запросы на таскс идут в роутер
app.use((err, req, res, next) => { //обработчик ошибок
  console.error(err); //пишем ошибку в консоль
  res.status(500).json({ error: 'internal error' }); //отвечаем 500
});

let PORT = process.env.PORT || 3000; //порт из .env или 3000 если там пусто 
app.listen(PORT, () => console.log('Сервер запущен на порту ' + PORT)); //запускаем сервер
//ссылка http://localhost:3000/tasks
