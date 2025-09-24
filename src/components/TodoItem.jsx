function TodoItem({ todo, onDelete, onToggleComplete }) {
  return (
    <li style={{ marginBottom: "10px" }}>
      <span
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {todo.text}
      </span>
      {/* Кнопки принятия или отмены в одном */}
      <button onClick={() => onToggleComplete(todo.id)}>
        {todo.isCompleted ? "Отменить" : "Выполнить"}
      </button>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "5px" }}>
        Удалить
      </button>
    </li>
  );
}

export default TodoItem;