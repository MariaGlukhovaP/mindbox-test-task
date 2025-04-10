import React, { useState } from "react";
import AddTodo from "../components/addTodo/addTodo";

interface AddTodoContainerProps {
  onAdd: (text: string) => void;
}

const AddTodoContainer: React.FC<AddTodoContainerProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <AddTodo
      input={input}
      onChange={(e) => setInput(e.target.value)}
      onAdd={handleAdd}
    />
  );
};

export default AddTodoContainer;
