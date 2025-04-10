interface ClearCompletedProps {
  onClear: () => void;
}

const ClearCompleted: React.FC<ClearCompletedProps> = ({ onClear }) => {
  return <button onClick={onClear}>Clear Completed</button>;
};

export default ClearCompleted;
