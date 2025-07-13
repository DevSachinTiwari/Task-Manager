import { useState } from 'react';

export default function useTasks(initialTasks = []) {
    const [tasks, setTasks] = useState(initialTasks);

    function addTask(text) {
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    }

    function toggleTask(id) {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return { tasks, addTask, toggleTask, deleteTask };
}
