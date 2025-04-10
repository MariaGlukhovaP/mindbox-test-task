import AddTodoContainer from "../../containers/addTodoContainer";
import TodoListContainer from "../../containers/todoListContainer";
import ClearCompletedContainer from "../../containers/clearCompletedContainer";
import Filter from "../filter/filter";
import styles from "./todo.module.css";

interface TodoProps {
  filter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  remaining: number;
  todos: { id: number; text: string; completed: boolean }[];
  onAdd: (text: string) => void;
  onToggle: (id: number) => void;
  onClear: () => void;
}

const Todo: React.FC<TodoProps> = ({
  filter,
  onFilterChange,
  remaining,
  todos,
  onAdd,
  onToggle,
  onClear,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.content}>
        <AddTodoContainer onAdd={onAdd} />
        <TodoListContainer todos={todos} onToggle={onToggle} />
        <div className={styles.bottom}>
          <div className={styles.left}>{remaining} items left</div>
          <Filter filter={filter} onFilterChange={onFilterChange} />
          <ClearCompletedContainer onClear={onClear} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
