import { useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // Получаем списки задач
  const getTodos = () => {
    return {
      all: todos,
      active: todos.filter((todo) => !todo.completed),
      completed: todos.filter((todo) => todo.completed),
    };
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
    getTodos,
  };
};
