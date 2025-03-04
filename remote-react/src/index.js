import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, getStore } from './store';

// Import our Web Components
import './components/ReactTodoWebComponent';
import './components/TodoStatsWebComponent';

// Export components and store functions
export { default as ReactTodoWebComponent } from './components/ReactTodoWebComponent';
export { default as TodoStatsWebComponent } from './components/TodoStatsWebComponent';
export { createStore, getStore, resetStore } from './store';

// Initialize the store
const store = createStore();

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Biblioteca de Componentes Web React inicializada');
}); 