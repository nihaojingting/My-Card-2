import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  };

  constructor() {
    super();
    this.header = 'My app';
  }

}
customElements.define('my-card', MyCard);