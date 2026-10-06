import { useState, useEffect } from 'react'; //берём хуки из React
import TaskForm from './components/TaskForm.jsx'; //подключаем форму
import TaskTable from './components/TaskTable.jsx'; //подключаем таблицу

let API = 'http://localhost:3000'; //адрес сервера

//стили страницы (цвета ежедневника)
let pageStyle = {
  backgroundColor: '#f5f0e6', //нежно-бежевый фон
  minHeight: '100vh', //на всю высоту
  padding: '40px 20px', //отступы
  fontFamily: 'Georgia, serif', //шрифт как в книге
};

//стиль карточки (в которой форма и таблица)
let cardStyle = {
  maxWidth: '900px', //максимальная ширина
  margin: '0 auto', //по центру
  backgroundColor: '#fdfbf7', //почти белый
  border: '1px solid #e0d5c0', //тонкая рамка
  borderRadius: '0', //острые углы
  padding: '30px'
};

//стиль заголовка
let titleStyle = {
  textAlign: 'center', //по центру
  color: '#5a4633', //тёмно-коричневый
  fontSize: '32px',
  marginBottom: '24px',
  fontWeight: 'normal',
  letterSpacing: '1px'
};

function App() {
  let [tasks, setTasks] = useState([]); //список задач
  let [title, setTitle] = useState(''); //название
  let [description, setDescription] = useState(''); //описание

  //получить задачи с сервера
  let loadTasks = async () => {
    let res = await fetch(API + '/tasks'); //GET-запрос
    let data = await res.json(); //получаем данные
    setTasks(data); //сохраняем
  };

  //при открытии страницы загружаем задачи
  useEffect(() => {
    loadTasks();
  }, []);

  //создать задачу
  let handleCreate = async (e) => {
    e.preventDefault(); //страница не перезагружается
    if (!title.trim()) return; //если пусто — не создаём
    await fetch(API + '/tasks', { //POST-запрос
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });
    setTitle(''); //очищаем поля
    setDescription('');
    loadTasks(); //обновляем список
  };

  //поменять статус
  let handleStatus = async (id, status) => {
    await fetch(API + '/tasks/' + id, { //PUT-запрос
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    loadTasks();
  };

  //удалить задачу
  let handleDelete = async (id) => {
    await fetch(API + '/tasks/' + id, { method: 'DELETE' }); //DELETE-запрос
    loadTasks();
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>AI Task Manager</h1>

        {/* форма создания — отдельный компонент */}
        <TaskForm
          title={title}
          description={description}
          onTitleChange={(e) => setTitle(e.target.value)}
          onDescriptionChange={(e) => setDescription(e.target.value)}
          onSubmit={handleCreate}
        />

        {/* таблица задач — отдельный компонент */}
        <TaskTable tasks={tasks} onStatus={handleStatus} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;