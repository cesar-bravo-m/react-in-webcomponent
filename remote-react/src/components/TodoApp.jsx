import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, selectTodos } from '../store/todoSlice';

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-app" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h3 style={{ color: '#2c3e50' }}>Todo</h3>
      
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Añadir nueva tarea..."
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '4px 0 0 4px',
            border: '1px solid #ddd',
            borderRight: 'none'
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer'
          }}
        >
          Añadir
        </button>
      </div>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px',
              borderBottom: '1px solid #eee',
              backgroundColor: todo.completed ? '#f8f9fa' : 'white'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span
              style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#6c757d' : '#212529'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer'
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#6c757d' }}>
          No hay tareas. ¡Añade una arriba!
        </p>
      )}
    </div>
  );
};

export default TodoApp; 