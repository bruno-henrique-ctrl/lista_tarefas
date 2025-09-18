import type { Task } from "./types";

export const getTasks = (): Task[] => {
    return [
        { id: 1, title: "Estudar React" },
        { id: 2, title: "Ler documentação do JavaScript" },
        { id: 3, title: "Praticar exercícios de programação" }
    ];
};
