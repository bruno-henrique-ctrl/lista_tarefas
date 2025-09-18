"use client";

import { useState, useEffect } from "react";
import { getTasks } from "../api";
import TaskList from "../components/TaskList";
import NovaTarefa from "../components/NovaTarefa";
import type { Task } from "../types";
import { useContadorDeTarefas } from "../hook/useContadorDeTarefas";

import styles from "./page.module.css";
import Header from "@/components/Header";

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
    <div className={`${styles.bg} min-h-screen flex flex-col justify-center items-center py-4 px-4`}>
      <Header />

      <div className={`${styles.menina1} z-10 w-full max-w-md bg-white shadow-md rounded-lg p-6`}>
        <p className="text-2xl font-bold text-right mb-6 text-orange-500">Total de tarefas: {taskCount}</p>

        <NovaTarefa onAddTask={addTask} />

        <div className="mt-6">
          <TaskList tasks={tasks} onRemoveTask={(removeTask)} />
        </div>
      </div>
    </div>
  );
}

export default App;
