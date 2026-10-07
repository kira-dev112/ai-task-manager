# ai task manager

практическая работа. приложение для управления задачами. список инструментов: react, node.js, postgresql и python.
## что где лежит
- backend — серверная часть
- frontend — сайт
- python — скрипт для выгрузки задач в csv
- docker-compose.yml — файл для запуска через docker
## файлы
### backend
- src/index.js — тут запускается сервер на 3000
- src/db.js — подключение к базе
- src/routes/tasks.js — обработчики запросов
- sql/init.sql — sql для создания таблицы tasks
- .env — порт и адрес базы
- Dockerfile — для сборки docker-образа
### frontend
- src/App.jsx — главный файл
- src/components/TaskForm.jsx — форма создания задачи
- src/components/TaskTable.jsx — таблица задач
- src/components/TaskRow.jsx — одна строка таблицы
- src/index.css — стили
- src/main.jsx — точка входа
- Dockerfile — для сборки docker-образа
### python
- export_tasks.py — выгружает задачи в csv
## как запустить
### 1. база данных
- установить postgresql
- в pgadmin создать базу task_manager
- выполнить sql из backend/sql/init.sql
### 2. backend
открыть терминал:
cd backend
npm install
npm run dev
- cd backend — заходим в папку backend
- npm install — ставим библиотеки (один раз)
- npm run dev — запускаем сервер
проверка: должно появиться "сервер запущен на порту 3000". можно открыть http://localhost:3000/tasks в браузере.
### 3. frontend
открыть второй терминал:
cd frontend
npm install
npm run dev
- cd frontend — заходим в папку frontend
- npm install — ставим библиотеки (один раз)
- npm run dev — запускаем сайт
проверка: сайт откроется на http://localhost:5173.
### 4. python
открыть третий терминал:
cd python
pip install psycopg2-binary python-dotenv
python export_tasks.py
- cd python — заходим в папку python
- pip install — ставим библиотеки для python
- python export_tasks.py — запускаем скрипт
проверка: появится файл tasks_export.csv со всеми задачами.
## запуск через docker
Docker позволяет запустить backend, frontend и базу данных одной командой:
docker compose up -d
после этого:
- сайт: http://localhost:5173
- сервер: http://localhost:3000
- база: localhost:5433
остановить:
docker compose down
## адреса запросов
- get /tasks — все задачи
- post /tasks — создать задачу
- put /tasks/:id — поменять статус
- delete /tasks/:id — удалить задачу
## статусы задач
- new — новая
- in_progress — в процессе
- done — выполнена