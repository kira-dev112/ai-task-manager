//компонент формы создания задачи
function TaskForm({ title, description, onTitleChange, onDescriptionChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ textAlign: 'center', marginBottom: '10px' }}>
      <input
        style={{
          padding: '10px 14px',
          border: '1px solid #c9b89a',
          borderRadius: '6px',
          fontSize: '15px',
          fontFamily: 'Georgia, serif',
          backgroundColor: '#fdfbf7',
          marginRight: '8px',
          outline: 'none'
        }}
        placeholder="Название"
        value={title}
        onChange={onTitleChange}
      />
      <input
        style={{
          padding: '10px 14px',
          border: '1px solid #c9b89a',
          borderRadius: '6px',
          fontSize: '15px',
          fontFamily: 'Georgia, serif',
          backgroundColor: '#fdfbf7',
          marginRight: '8px',
          outline: 'none'
        }}
        placeholder="Описание"
        value={description}
        onChange={onDescriptionChange}
      />
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#a0866b',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '15px',
          fontFamily: 'Georgia, serif',
          cursor: 'pointer'
        }}
        type="submit"
      >
        Создать
      </button>
    </form>
  );
}

export default TaskForm;