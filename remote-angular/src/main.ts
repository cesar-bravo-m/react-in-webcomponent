import './polyfills';

// Simple counter web component without Angular bootstrapping
class AngularCounterElement extends HTMLElement {
  private count = 0;
  private shadow: ShadowRoot;
  private countDisplay: HTMLElement | null = null;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    // Add event listeners when the element is added to the DOM
    const incrementBtn = this.shadow.querySelector('.btn-increment');
    const decrementBtn = this.shadow.querySelector('.btn-decrement');
    const resetBtn = this.shadow.querySelector('.btn-reset');

    if (incrementBtn) incrementBtn.addEventListener('click', () => this.increment());
    if (decrementBtn) decrementBtn.addEventListener('click', () => this.decrement());
    if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
  }

  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    const incrementBtn = this.shadow.querySelector('.btn-increment');
    const decrementBtn = this.shadow.querySelector('.btn-decrement');
    const resetBtn = this.shadow.querySelector('.btn-reset');

    if (incrementBtn) incrementBtn.removeEventListener('click', () => this.increment());
    if (decrementBtn) decrementBtn.removeEventListener('click', () => this.decrement());
    if (resetBtn) resetBtn.removeEventListener('click', () => this.reset());
  }

  increment() {
    this.count++;
    this.updateCount();
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.updateCount();
    }
  }

  reset() {
    this.count = 0;
    this.updateCount();
  }

  updateCount() {
    if (this.countDisplay) {
      this.countDisplay.textContent = this.count.toString();
    }
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      .angular-counter {
        font-family: Arial, sans-serif;
        background-color: #e8f5e9;
        border: 1px solid #4caf50;
        border-radius: 8px;
        padding: 20px;
        max-width: 400px;
        margin: 0 auto;
      }

      h2 {
        color: #2e7d32;
        text-align: center;
        margin-top: 0;
      }

      .counter-display {
        text-align: center;
        font-size: 18px;
        margin: 20px 0;
      }

      .count {
        font-weight: bold;
        color: #2e7d32;
        font-size: 24px;
      }

      .counter-controls {
        display: flex;
        justify-content: center;
        gap: 10px;
      }

      .btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s;
      }

      .btn-increment {
        background-color: #4caf50;
        color: white;
      }

      .btn-decrement {
        background-color: #f44336;
        color: white;
      }

      .btn-reset {
        background-color: #2196f3;
        color: white;
      }

      .btn:hover {
        opacity: 0.9;
      }
    `;

    const container = document.createElement('div');
    container.className = 'angular-counter';
    container.innerHTML = `
      <h2>Angular-Style Counter Component</h2>
      <div class="counter-display">
        <p>Current Count: <span class="count">${this.count}</span></p>
      </div>
      <div class="counter-controls">
        <button class="btn btn-increment">Increment</button>
        <button class="btn btn-decrement">Decrement</button>
        <button class="btn btn-reset">Reset</button>
      </div>
    `;

    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
    
    // Store reference to count display for updates
    this.countDisplay = this.shadow.querySelector('.count');
  }
}

// Register the custom element
customElements.define('angular-counter', AngularCounterElement);

console.log('Angular-Style Counter Web Component registered successfully!'); 