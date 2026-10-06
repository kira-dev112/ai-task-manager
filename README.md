# ai task manager
практическая работа. приложение для управления задачами.
список инструментов: react, node.js, postgresql, python.
## что делает каждый файл
### backend
- src/index.js — запускает express-сервер на порту 3000, подключает cors, json-парсер и роутер задач
- src/db.js — подключается к postgresql через пул соединений, читает адрес базы из .env
- src/routes/tasks.js — обработчики api (get /tasks, post /tasks, put /tasks/:id, delete /tasks/:id)
- sql/init.sql — sql-скрипт для создания таблицы (tasks) с полями (id, title, description, status, created_at)
- .env — порт сервера и адрес базы данных
- package.json — зависимости и команды запуска
### frontend
- src/App.jsx — главный компонент, хранит состояние и собирает остальные компоненты
- src/components/TaskForm.jsx — форма создания задачи (название, описание и т.д)
- src/components/TaskTable.jsx — таблица со списком всех задач
- src/components/TaskRow.jsx — одна строка таблицы (одна задача, select для статуса, кнопка удалить)
- src/index.css — стили страницы
- src/main.jsx — точка входа react
- index.html — html-шаблон
### python
- export_tasks.py — скрипт подключается к postgresql, выгружает все задачи и сохраняет их в csv-файл tasks_export.csv
## как запустить и проверить работоспособность
### 1.подготовка базы данных
1. установить postgresql
2. открыть pgadmin, создать базу task_manager
3. выполнить sql-скрипт из backend/sql/init.sql — создастся таблица tasks
### 2.запуск backend
открыть терминал в корне проекта:
cd backend
npm install
npm run dev
- cd backend — переходим в папку бэкенда
- npm install — устанавливаем зависимости (один раз)
- npm run dev — запускаем сервер разработки
проверка: в терминале появится "сервер запущен на порту 3000". открыть http://localhost:3000/tasks в браузере — вернётся список задач в формате json.
### 3.запуск frontend
открыть второй терминал:
cd frontend
npm install
npm run dev
- cd frontend — переходим в папку фронтенда
- npm install — устанавливаем зависимости (один раз)
- npm run dev — запускаем сервер разработки
проверка: сайт откроется на http://localhost:5173. там будет форма создания задачи, таблица задач, select для смены статуса и кнопка удаления.
### 4.запуск python-скрипта
открыть третий терминал:
cd python
pip install psycopg2-binary python-dotenv
python export_tasks.py
- cd python — переходим в папку python
- pip install — устанавливаем библиотеки для работы с postgresql и .env
- python export_tasks.py — запускаем скрипт выгрузки
проверка: в терминале появится "готово! выгружено: n". в папке python создастся файл tasks_export.csv со всеми задачами из базы.
## адреса запросов
- get /tasks — получить список всех задач
- post /tasks — создать новую задачу (поля title и description)
- put /tasks/:id — изменить статус задачи (значения: new, in_progress, done)
- delete /tasks/:id — удалить задачу
## статусы задач
- new — новая
- in_progress — в процессе
- done — выполнена