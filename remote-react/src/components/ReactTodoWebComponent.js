import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import { getStore } from '../store';

class ReactTodoWebComponent extends HTMLElement {
  constructor() {
    super();
    // Create a shadow DOM
    this.attachShadow({ mode: 'open' });
    
    // Create a container for our React app
    this.container = document.createElement('div');
    this.shadowRoot.appendChild(this.container);
    
    // Add some basic styling to the shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        border: 2px solid #3498db;
        border-radius: 8px;
        padding: 16px;
        margin: 16px 0;
        background-color: #f8f9fa;
      }
    `;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    // Get the shared Redux store
    const store = getStore();
    
    // Render the React component into the shadow DOM when the element is added to the page
    // Wrap it with Redux Provider to connect to the shared store
    ReactDOM.render(
      <Provider store={store}>
        <TodoApp />
      </Provider>,
      this.container
    );
  }

  disconnectedCallback() {
    // Clean up React when the element is removed from the page
    ReactDOM.unmountComponentAtNode(this.container);
  }
}

// Define the custom element
customElements.define('react-todo-app', ReactTodoWebComponent);

export default ReactTodoWebComponent; 