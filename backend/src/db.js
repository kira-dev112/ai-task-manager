let { Pool } = require('pg'); //берём пул из библиотеки pg
require('dotenv').config(); //включаем чтение .env
let pool = new Pool({ //создаём пул соединений
  connectionString: process.env.DATABASE_URL //адрес базы из .env
});
module.exports = pool; //отдаём пул другим файлам