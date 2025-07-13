import React from 'react';
import { renderHook, act } from '@testing-library/react';
import useTasks from '../hooks/useTasks';

test('adds a task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => result.current.addTask('New Task'));
    expect(result.current.tasks).toHaveLength(1);
});
