import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "../components/addTodo/addTodo";

describe("AddTodo component", () => {
  it("вызывает onAdd при клике на кнопку", () => {
    const onAdd = vi.fn();
    const onChange = vi.fn();

    render(<AddTodo input="Test task" onAdd={onAdd} onChange={onChange} />);

    const button = screen.getByRole("button", { name: /v/i });
    fireEvent.click(button);

    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  it("вызывает onAdd при нажатии Enter", () => {
    const onAdd = vi.fn();
    const onChange = vi.fn();

    render(<AddTodo input="Task on Enter" onAdd={onAdd} onChange={onChange} />);

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  it("отображает переданное значение input", () => {
    const inputValue = "Pre-filled input";
    render(<AddTodo input={inputValue} onAdd={vi.fn()} onChange={vi.fn()} />);

    expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
  });

  it("вызывает onChange при изменении поля ввода", () => {
    const onChange = vi.fn();
    render(<AddTodo input="" onAdd={vi.fn()} onChange={onChange} />);

    const input = screen.getByPlaceholderText(/what needs to be done/i);
    fireEvent.change(input, { target: { value: "New Task" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
