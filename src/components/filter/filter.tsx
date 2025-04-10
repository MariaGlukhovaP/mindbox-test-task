import styles from "./filter.module.css";

interface FilterProps {
  filter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

const Filter: React.FC<FilterProps> = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.container}>
      <button
        className={filter === "all" ? styles.active : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={filter === "active" ? styles.active : ""}
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>
      <button
        className={filter === "completed" ? styles.active : ""}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
