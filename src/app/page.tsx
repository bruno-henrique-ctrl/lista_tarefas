"use client";

import { useState, useEffect } from "react";
import { getTasks } from "../api";
import TaskList from "../components/TaskList";
import NovaTarefa from "../components/NovaTarefa";
import type { Task } from "../types";
import { useContadorDeTarefas } from "../hook/useContadorDeTarefas";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const initialTasks = getTasks();
    setTasks(initialTasks);
  }, []);

  const addTask = (title: string) => {
    const newTask = {
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const taskCount = useContadorDeTarefas(tasks);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-4 px-4">
      <div className="w-6xl max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Lista de Tarefas</h1>
        <p className="text-gray-600 text-center mb-6">Total de tarefas: {taskCount}</p>

        <NovaTarefa onAddTask={addTask} />

        <div className="mt-6">
          <TaskList tasks={tasks} onRemoveTask={(removeTask)} />
        </div>
      </div>
    </div>
  );
}

export default App;
