// TodoForm.js
import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    addTodo(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        placeholder="What is the task today?"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  );
};
