import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';

const sampleTasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
];

test('renders "No tasks available" when list is empty', () => {
    render(<TaskList tasks={[]} onToggle={() => { }} onDelete={() => { }} />);
    expect(screen.getByText('No tasks available.')).toBeInTheDocument();
});

test('renders list of tasks', () => {
    render(<TaskList tasks={sampleTasks} onToggle={() => { }} onDelete={() => { }} />);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
});
