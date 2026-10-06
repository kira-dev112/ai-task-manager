//подключаем компонент одной строки
import TaskRow from './TaskRow.jsx';
//компонент таблицы со всеми задачами
function TaskTable({ tasks, onStatus, onDelete }) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        backgroundColor: '#fdfbf7',
        border: '1px solid #e0d5c0',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <thead>
        <tr>
          <th style={{ 
            backgroundColor: '#ede4d3', 
            color: '#5a4633', padding: '12px', 
            textAlign: 'left', fontSize: '15px', 
            fontWeight: 'normal', 
            borderBottom: '1px solid #e0d5c0' 
            }}>ID</th>
          <th style={{ 
            backgroundColor: '#ede4d3', 
            color: '#5a4633', padding: '12px', 
            textAlign: 'left', fontSize: '15px', 
            fontWeight: 'normal', 
            borderBottom: '1px solid #e0d5c0' 
            }}>Название</th>
          <th style={{ 
            backgroundColor: '#ede4d3', 
            color: '#5a4633', 
            padding: '12px', 
            textAlign: 'left', 
            fontSize: '15px', 
            fontWeight: 'normal', 
            borderBottom: '1px solid #e0d5c0' 
            }}>Описание</th>
          <th style={{ 
            backgroundColor: '#ede4d3', 
            color: '#5a4633', 
            padding: '12px', 
            textAlign: 'left', 
            fontSize: '15px', 
            fontWeight: 'normal', 
            borderBottom: '1px solid #e0d5c0' 
            }}>Статус</th>
          <th style={{ 
            backgroundColor: '#ede4d3', 
            color: '#5a4633', padding: '12px', 
            textAlign: 'left', fontSize: '15px', 
            fontWeight: 'normal', 
            borderBottom: '1px solid #e0d5c0' 
            }}>Действие</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((t) => (
          <TaskRow key={t.id} task={t} onStatus={onStatus} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;