export function filterTasks(tasks, filter) {
    if (filter === 'completed') return tasks.filter(t => t.completed);
    if (filter === 'incomplete') return tasks.filter(t => !t.completed);
    return tasks;
}