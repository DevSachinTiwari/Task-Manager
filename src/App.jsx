import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import useTasks from './hooks/useTasks';
import { filterTasks } from './utils/filterTasks';

export default function App() {
    const { tasks, addTask, toggleTask, deleteTask } = useTasks();
    const [filter, setFilter] = useState('all');

    const visibleTasks = filterTasks(tasks, filter);

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTaskForm onAdd={addTask} />
            <Filter currentFilter={filter} onChange={setFilter} />
            <TaskList
                tasks={visibleTasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
            />
        </div>
    );
}