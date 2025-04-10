import TodoList from "../components/todoList/todoList";
import { Todo } from "../hooks/useTodos";

interface TodoListContainerProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

const TodoListContainer: React.FC<TodoListContainerProps> = ({
  todos,
  onToggle,
}) => {
  return <TodoList todos={todos} onToggle={onToggle} />;
};

export default TodoListContainer;
