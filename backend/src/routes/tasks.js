let express = require('express'); //подключаем express
let router = express.Router(); //создаём роутер
let pool = require('../db'); //берём подключение к базе из db.js

//получить все задачи
router.get('/', async (req, res) => {
  try { //начинаем блок с обработкой ошибок
    let result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC'); // запрос: все задачи по дате
    res.json(result.rows); //отправляем список задач
  } catch (err) { //если произошла ошибка
    res.status(500).json({ error: err.message }); //код 500 (ошибка на сервере)
  }
});
//создать задачу
router.post('/', async (req, res) => {
  let title = req.body.title; //берём название из тела запроса
  let description = req.body.description; //берём описание из тела запроса
  if (!title) { //если название не указано
    return res.status(400).json({ error: 'title is required' }); //код 400 (неверный запрос)
  }
  try { //начинаем блок с обработкой ошибок
    let result = await pool.query( //делаем запрос к базе
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *', //добавляем задачу
      [title, description] //подставляем значения вместо $1 и $2
    );
    res.status(201).json(result.rows[0]); //код 201 (задача создана)
  } catch (err) { //если произошла ошибка
    res.status(500).json({ error: err.message }); //код 500 (ошибка на сервере)
  }
});
//изменить статус задачи
router.put('/:id', async (req, res) => {
  let id = req.params.id; //берём id из адреса
  let status = req.body.status; //берём новый статус из тела запроса
  let allowed = ['new', 'in_progress', 'done']; //допустимые статусы
  if (!allowed.includes(status)) { //если статус не из списка
    return res.status(400).json({ error: 'invalid status' }); //код 400 (неверный запрос)
  }
  try { //начинаем блок с обработкой ошибок
    let result = await pool.query( //делаем запрос к базе
      'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *', //обновляем статус
      [status, id] //подставляем значения вместо $1 и $2
    );
    if (result.rowCount === 0) { //если задачи с таким id нет
      return res.status(404).json({ error: 'not found' }); //код 404 (не найдено)
    }
    res.json(result.rows[0]); //отправляем обновлённую задачу
  } catch (err) { //если произошла ошибка
    res.status(500).json({ error: err.message }); //код 500 (ошибка на сервере)
  }
});
//удалить задачу
router.delete('/:id', async (req, res) => {
  let id = req.params.id; //берём id из адреса
  try { //начинаем блок с обработкой ошибок
    let result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]); //удаляем задачу по id
    if (result.rowCount === 0) { //если задачи с таким id нет
      return res.status(404).json({ error: 'not found' }); //код 404 (не найдено)
    }
    res.json({ deleted: result.rows[0] }); //отправляем удалённую задачу
  } catch (err) { //если произошла ошибка
    res.status(500).json({ error: err.message }); //код 500 (ошибка на сервере)
  }
});
module.exports = router; //отдаём роутер в index.js