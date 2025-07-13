import React from 'react';
export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                data-testid="toggle-checkbox"
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
            <button onClick={() => onDelete(task.id)} data-testid="delete-button">
                Delete
            </button>
        </div>
    );
}
