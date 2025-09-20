import { render, screen, fireEvent } from "@testing-library/react";
import App from "../app/page";
import * as api from "../api";
import { useContadorDeTarefas } from "../hook/useContadorDeTarefas";

jest.mock("../api");
jest.mock("../hook/useContadorDeTarefas");


describe("App Tests Unitarios", () => {
  const mockedTasks = [
    { id: 1, title: "tomar agua (talvez)" },
    { id: 2, title: "assistir" },
  ];

  beforeEach(() => {
    (api.getTasks as jest.Mock).mockReturnValue(mockedTasks);
    (useContadorDeTarefas as jest.Mock).mockImplementation((tasks) => tasks.length);
  });

  test("renderiza a lista", () => {
    render(<App />);
    expect(screen.getByText("Total de tarefas: 2")).toBeInTheDocument();
    expect(screen.getByText("tomar agua (talvez)")).toBeInTheDocument();
    expect(screen.getByText("assistir")).toBeInTheDocument();
  });

  test("adiciona uma nova tarefa", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    const button = screen.getByText("Adicionar");

    fireEvent.change(input, { target: { value: "comer merda" } });
    fireEvent.click(button);

    expect(screen.getByText("comer merda")).toBeInTheDocument();
    expect(screen.getByText("Total de tarefas: 3")).toBeInTheDocument();
  });

  test("remove uma tarefa", () => {
    render(<App />);

    const removeButtons = screen.getAllByText("Remover");
    fireEvent.click(removeButtons[0]);

    expect(screen.queryByText("tomar agua (talvez)")).not.toBeInTheDocument();
    expect(screen.getByText("Total de tarefas: 1")).toBeInTheDocument();
  });
});

describe("App Test Integracao", () => {
  const mockedTasks = [
    { id: 1, title: "tomar agua (talvez)" },
    { id: 2, title: "assistir" },
  ];

  beforeEach(() => {
    (api.getTasks as jest.Mock).mockReturnValue(mockedTasks);
    (useContadorDeTarefas as jest.Mock).mockImplementation((tasks) => tasks.length);
  });

  test("renderiza a lista, adiciona e remove tarefas", () => {
    render(<App />);

    expect(screen.getByText("Total de tarefas: 2")).toBeInTheDocument();
    expect(screen.getByText("tomar agua (talvez)")).toBeInTheDocument();
    expect(screen.getByText("assistir")).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Adicionar");
    fireEvent.change(input, { target: { value: "comer merda" } });
    fireEvent.click(addButton);
    expect(screen.getByText("comer merda")).toBeInTheDocument();
    expect(screen.getByText("Total de tarefas: 3")).toBeInTheDocument();

    const removeButtons = screen.getAllByText("Remover");
    removeButtons.map((btn) => {
      fireEvent.click(btn);
      expect(btn).not.toBeInTheDocument();
    });
    expect(screen.queryByText("tomar agua (talvez)")).not.toBeInTheDocument();
    expect(screen.queryByText("assistir")).not.toBeInTheDocument();
    expect(screen.queryByText("comer merda")).not.toBeInTheDocument();
    expect(screen.getByText("Total de tarefas: 0")).toBeInTheDocument();
    expect(screen.getByText("Nenhuma tarefa adicionada ainda 🚀")).toBeInTheDocument();
  })
});
