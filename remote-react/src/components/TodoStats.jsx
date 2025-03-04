import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todoSlice';

const TodoStats = () => {
  const todos = useSelector(selectTodos);
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  
  return (
    <div style={{
      backgroundColor: '#f1f8ff',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Estadísticas de Tareas</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>{totalTodos}</div>
          <div>Total</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2ecc71' }}>{completedTodos}</div>
          <div>Completadas</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>{pendingTodos}</div>
          <div>Pendientes</div>
        </div>
      </div>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#7f8c8d', textAlign: 'center' }}>
        {completedTodos === totalTodos && totalTodos > 0 ? 
          '🎉 ¡Todas las tareas completadas!' : 
          `Progreso: ${totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0}%`}
      </div>
    </div>
  );
};

export default TodoStats; 