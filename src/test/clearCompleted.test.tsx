import { render, screen, fireEvent } from "@testing-library/react";
import ClearCompleted from "../components/clearCompleted/clearCompleted";

describe("ClearCompleted component", () => {
  it('отображает кнопку "Clear Completed"', () => {
    render(<ClearCompleted onClear={vi.fn()} />);
    expect(
      screen.getByRole("button", { name: /clear completed/i })
    ).toBeInTheDocument();
  });

  it("вызывает onClear при клике на кнопку", () => {
    const onClear = vi.fn();
    render(<ClearCompleted onClear={onClear} />);

    const button = screen.getByRole("button", { name: /clear completed/i });
    fireEvent.click(button);

    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
