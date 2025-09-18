import { useState } from "react";

const NovaTarefa = ({ onAddTask }: { onAddTask: (title: string) => void }) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;
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
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 shadow-sm text-orange-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
            <button
                type="submit"
                className="w-full cursor-pointer sm:w-auto px-5 py-2.5 rounded-lg text-white font-bold bg-gradient-to-r from-orange-300 to-orange-500 shadow-md hover:from-orange-500 hover:to-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1 transition"
            >
                Adicionar
            </button>
        </form>
    );
};

export default NovaTarefa;
