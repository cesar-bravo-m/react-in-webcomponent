import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="angular-counter">
      <h2>Angular Counter</h2>
      <div class="counter-display">
        <p>Contador: <span class="count">{{ count }}</span></p>
      </div>
      <div class="counter-controls">
        <button (click)="increment()" class="btn btn-increment">+1</button>
        <button (click)="decrement()" class="btn btn-decrement">-1</button>
        <button (click)="reset()" class="btn btn-reset">Reiniciar</button>
      </div>
    </div>
  `,
  styles: [`
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
  `]
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }
} 