import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import { getStore } from '../store';

class ReactTodoWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.container = document.createElement('div');
    this.shadowRoot.appendChild(this.container);
    
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
    const store = getStore();
    
    ReactDOM.render(
      <Provider store={store}>
        <TodoApp />
      </Provider>,
      this.container
    );
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}

customElements.define('react-todo-app', ReactTodoWebComponent);

export default ReactTodoWebComponent; 