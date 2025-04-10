import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import Todo from "../components/todo/todo";

const TodoContainer: React.FC = () => {
  const { addTodo, toggleTodo, clearCompleted, getTodos } = useTodos();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const { all, active, completed } = getTodos();
  const remaining = active.length;

  const handleFilterChange = (filter: "all" | "active" | "completed") => {
    setFilter(filter);
  };

  const filteredTodos =
    filter === "all" ? all : filter === "active" ? active : completed;

  return (
    <Todo
      filter={filter}
      onFilterChange={handleFilterChange}
      remaining={remaining}
      todos={filteredTodos}
      onAdd={addTodo}
      onToggle={toggleTodo}
      onClear={clearCompleted}
    />
  );
};

export default TodoContainer;
