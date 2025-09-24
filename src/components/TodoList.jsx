import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onToggleComplete }) {
  if (todos.length === 0) {
    return <p>Задач пока нет. Добавьте первую!</p>;
  }

  // Заполнение списка
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;