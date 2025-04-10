import ClearCompleted from "../components/clearCompleted/clearCompleted";

interface ClearCompletedContainerProps {
  onClear: () => void;
}

const ClearCompletedContainer: React.FC<ClearCompletedContainerProps> = ({
  onClear,
}) => {
  return <ClearCompleted onClear={onClear} />;
};

export default ClearCompletedContainer;
