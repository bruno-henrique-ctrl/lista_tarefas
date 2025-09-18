import { useState } from "react";

const NovaTarefa = ({ onAddTask }: { onAddTask: (title: string) => void }) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return; // Evita adicionar vazio
        onAddTask(newTask);
        setNewTask("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full"
        >
            <input
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
            >
                Adicionar
            </button>
        </form>
    );
};

export default NovaTarefa;
