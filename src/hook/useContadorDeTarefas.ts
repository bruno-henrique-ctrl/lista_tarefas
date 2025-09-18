import { useMemo } from "react";
import type { Task } from "../types";

export const useContadorDeTarefas = (tasks: Task[]) => {
    const count = useMemo(() => tasks.length, [tasks]);

    return count;
}
