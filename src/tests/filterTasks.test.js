import React from 'react';
import { filterTasks } from "../utils/filterTasks";

const sampleTask = [
    {id: 1, text: "task 1", completed: true},
    {id: 2, text: "task 2", completed: false},
]

test('Filter completed task', ()=>{
    const result = filterTasks(sampleTask, 'completed');
    expect(result).toHaveLength(1);
    expect(result[0].completed).toBe(true);
})