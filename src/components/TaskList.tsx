import type { Task } from "../types";

const TaskList = ({
    tasks,
    onRemoveTask,
}: {
    tasks: Task[];
    onRemoveTask: (id: number) => void;
}) => {
    return (
        <ul className="space-y-3">
            {tasks.length === 0 ? (
                <p className="text-gray-400 text-center italic text-sm sm:text-base">
                    Nenhuma tarefa adicionada ainda 🚀
                </p>
            ) : (
                tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-sm border border-gray-200 rounded-lg px-4 py-3 transition hover:shadow-md hover:border-orange-500"
                    >
                        <span className="text-gray-700 font-medium text-sm sm:text-base break-words">
                            {task.title}
                        </span>
                        <button
                            onClick={() => onRemoveTask(task.id)}
                            className="mt-2 sm:mt-0 px-3 py-1.5 text-sm font-semibold text-orange-500 bg-orange-50 hover:bg-orange-300 rounded-md border border-orange-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 cursor-pointer transition"
                        >
                            Remover
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default TaskList;
