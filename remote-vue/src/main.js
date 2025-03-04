// Define Vue globals before importing Vue
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_OPTIONS_API__ = true;

import { createApp, h } from 'vue';
import VueCounter from './components/VueCounter.vue';

// Create a custom element class
class VueCounterElement extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    this.attachShadow({ mode: 'open' });
    // Create a container for the Vue app
    const container = document.createElement('div');
    this.shadowRoot.appendChild(container);
    
    // Create and mount the Vue app
    const app = createApp({
      render: () => h(VueCounter)
    });
    
    app.mount(container);
  }
}

// Register the custom element
customElements.define('vue-counter', VueCounterElement);

console.log('Vue Counter Web Component registered successfully!'); 