import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, text: 'Aprender React', completed: true },
    { id: 2, text: 'Aprender Web Components', completed: false },
    { id: 3, text: 'Construir una demo', completed: false },
    { id: 4, text: 'Aprender Redux Toolkit', completed: false }
  ]
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newId = state.todos.length > 0 
        ? Math.max(...state.todos.map(t => t.id)) + 1 
        : 1;
      state.todos.push({ 
        id: newId, 
        text: action.payload, 
        completed: false 
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todoSlice.reducer; 