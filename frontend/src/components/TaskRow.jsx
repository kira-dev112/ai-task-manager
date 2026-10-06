// компонент одной строки таблицы
function TaskRow({ task, onStatus, onDelete }) {
  return (
    <tr>
      <td style={{ 
        padding: '12px', 
        color: '#4a3b2a', 
        fontSize: '14px', 
        borderBottom: '1px solid #f0e8da' 
        }}>{task.id}</td>
      <td style={{ 
        padding: '12px', 
        color: '#4a3b2a', 
        fontSize: '14px', 
        borderBottom: '1px solid #f0e8da' 
        }}>{task.title}</td>
      <td style={{ 
        padding: '12px', 
        color: '#4a3b2a', 
        fontSize: '14px', 
        borderBottom: '1px solid #f0e8da' 
        }}>{task.description}</td>
      <td style={{ 
        padding: '12px', 
        color: '#4a3b2a', 
        fontSize: '14px', 
        borderBottom: '1px solid #f0e8da' }}>
        <select
          style={{
            padding: '6px 10px',
            border: '1px solid #c9b89a',
            borderRadius: '4px',
            backgroundColor: '#fdfbf7',
            fontFamily: 'Georgia, serif',
            fontSize: '13px',
            color: '#4a3b2a',
            cursor: 'pointer'
          }}
          value={task.status}
          onChange={(e) => onStatus(task.id, e.target.value)}
        >
          <option value="new">Новая</option>
          <option value="in_progress">В процессе</option>
          <option value="done">Готово</option>
        </select>
      </td>
      <td style={{ padding: '12px', color: '#4a3b2a', fontSize: '14px', borderBottom: '1px solid #f0e8da' }}>
        <button
          style={{
            padding: '6px 12px',
            backgroundColor: '#c1765a',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            fontFamily: 'Georgia, serif',
            cursor: 'pointer'
          }}
          onClick={() => onDelete(task.id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}

export default TaskRow;