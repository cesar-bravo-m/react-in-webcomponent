import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoStats from './TodoStats';
import { getStore } from '../store';

class TodoStatsWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.container = document.createElement('div');
    this.shadowRoot.appendChild(this.container);
    
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        border: 2px solid #2ecc71;
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
        <TodoStats />
      </Provider>,
      this.container
    );
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}

customElements.define('todo-stats', TodoStatsWebComponent);

export default TodoStatsWebComponent; 