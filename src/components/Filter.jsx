import React from 'react';
export default function Filter({ currentFilter, onChange }) {
    const filters = ['all', 'completed', 'incomplete'];
    return (
        <div style={{ marginBottom: '10px' }}>
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => onChange(filter)}
                    disabled={currentFilter === filter}
                    style={{
                        fontWeight: currentFilter === filter ? 'bold' : 'normal',
                        marginRight: '5px'
                    }}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}