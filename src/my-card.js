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

  duplicateButton() {
    // Get the card element to duplicate
    const originalCard = document.querySelector('.card');

    // Target your card. Create a clone of the node
    const clonedCard = originalCard.cloneNode(true);

    // Append the cloned card to the card container
    document.querySelector('.cardcontainer').appendChild(clonedCard);
  }

  toggleButton() {
    // Get the first element with the class "card"
    const card = document.querySelector('.card');

    if (card) {
      // Toggle the background color
      if (card.style.backgroundColor === '' || card.style.backgroundColor === 'pink') {
        card.style.backgroundColor = 'lightblue';
      } else {
        card.style.backgroundColor = 'pink';
      }
    }
  }

  changeHeadingButton() {
    // Change text of heading
    const heading = document.getElementById('heading');
    if (heading) {
      heading.textContent = 'I really like bacon and cabbage lol';
    }
  }

  removeDuplicate() {
    // Get all card elements within the container
    const cardcontainer = document.querySelector('.cardcontainer');
    const cards = cardcontainer.querySelectorAll('.card');

    // Checks for cards to remove
    if (cards.length > 1) {
      // Remove the last card in the list
      const lastCard = cards[cards.length - 1];
      cardcontainer.removeChild(lastCard);
    }
  }
}
customElements.define('my-card', MyCard);