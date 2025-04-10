import styles from "./addTodo.module.css";

interface AddTodoProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ input, onChange, onAdd }) => {
  return (
    <div className={styles.container}>
      <button onClick={onAdd} className={styles.button}>
        V
      </button>
      <input
        value={input}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        placeholder="What needs to be done?"
        type="text"
        className={styles.input}
      />
    </div>
  );
};

export default AddTodo;
