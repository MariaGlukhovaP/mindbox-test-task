import { Todo } from "../../hooks/useTodos";
import styles from "./todoList.module.css";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.listItem}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
