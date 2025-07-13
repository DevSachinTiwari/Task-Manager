import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskForm from '../components/AddTaskForm';

test('calls onAdd when form is submitted', () => {
    const onAdd = jest.fn();
    render(<AddTaskForm onAdd={onAdd} />);

    fireEvent.change(screen.getByPlaceholderText('Enter task'), { target: { value: 'Test Task' } });
    fireEvent.click(screen.getByText('Add Task'));

    expect(onAdd).toHaveBeenCalledWith('Test Task');
});
