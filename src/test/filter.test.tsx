import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/filter/filter";

describe("Filter component", () => {
  it("отображает три кнопки: All, Active, Completed", () => {
    render(<Filter filter="all" onFilterChange={vi.fn()} />);

    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /active/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /completed/i })
    ).toBeInTheDocument();
  });

  it("вызывает onFilterChange с правильным аргументом при клике", () => {
    const onFilterChange = vi.fn();
    render(<Filter filter="all" onFilterChange={onFilterChange} />);

    fireEvent.click(screen.getByRole("button", { name: /active/i }));
    expect(onFilterChange).toHaveBeenCalledWith("active");

    fireEvent.click(screen.getByRole("button", { name: /completed/i }));
    expect(onFilterChange).toHaveBeenCalledWith("completed");

    fireEvent.click(screen.getByRole("button", { name: /all/i }));
    expect(onFilterChange).toHaveBeenCalledWith("all");
  });

  it("добавляет активный класс к выбранной кнопке", () => {
    render(<Filter filter="active" onFilterChange={vi.fn()} />);

    const activeButton = screen.getByRole("button", { name: /active/i });
    expect(activeButton.className).toContain("active");
  });
});
