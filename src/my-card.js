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

  render() {
    return html`
      <div class="cardcontainer" id="cardcontainer">
        <div class="card" id="card" style="background-color: pink">
          <!-- header -->
          <h2 id="heading">Jing-Ting Dong at the Library</h2>
          <!-- img -->
          <img src="https://i.imgur.com/XPC2j0i.jpg" alt="Card Image">
          <div class="card-content">
            <!-- body paragraph -->
            <details>
  <summary>Summary</summary>
  <p id="paragraph">Hi my name is Jing-Ting Dong. This is an image of me giving a thumbs up at the library while working on this coding project. I like cabbage.</p>
</details>
            <!-- hide paragraph button -->
            <button class="button" id="hideButton">Details</button>
          </div>
        </div>
      </div>
      <!-- Buttons -->
      <button id="duplicateButton" @click=${this.duplicateButton}>Duplicate Card</button>
      <button id="toggleButton" @click=${this.toggleButton}>Toggle Background</button>
      <button id="changeHeadingButton" @click=${this.changeHeadingButton}>Change Heading</button>
      <button id="removeDuplicate" @click=${this.removeDuplicate}>Remove A Card</button>
    `;
}
}
customElements.define('my-card', MyCard);