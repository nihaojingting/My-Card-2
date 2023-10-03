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

static styles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--my-card-background-color);
  }

  main {
    flex-grow: 1;
  }

  .logo {
    margin-top: 36px;
    animation: app-logo-spin infinite 20s linear;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .app-footer {
    font-size: calc(12px + 0.5vmin);
    align-items: center;
  }

  .app-footer a {
    margin-left: 5px;
  }
`;

duplicateButton() {
  //THE DUPLICATING BUTTON STUFF
  // Get the card element to duplicate
  const originalCard = document.querySelector('.card');

  // Target your card. Create a clone of the node (hint: .... whatever selector .cloneNode(true) )
  
  const clonedCard = originalCard.cloneNode(true);

 //Append means to put data inside an element
  // Append(add on) the cloned card, whic to the cardcontainer.
  document.querySelector('.cardcontainer').appendChild(clonedCard);
}
toggleButton() {
  // Get the first element with the class "card"
  const card = document.querySelector('.card');
  const toggleButton = document.getElementById('toggleButton');

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
  //CHANGE TEXT OF HEADING TO SOMETHING ELSE-INATOR

const heading = document.getElementById('heading');
const changeTextButton = document.getElementById('changeHeadingButton');

  // Change the text of the heading
  heading.textContent = 'I really like bacon and cabbage lol';
}

removeDuplicate() {
  //DELETE LAST INSTANCE CARD-INATOR

const removeDuplicate = document.getElementById('removeDuplicate');

  // Get all card elements within the container
  const cardcontainer = document.querySelector('.cardcontainer'); // Use '#cardcontainer' to select by ID
  const cards = cardcontainer.querySelectorAll('.card'); // Use querySelectorAll to select all matching elements

  // Checks for cards to remove
  if (cards.length > 1) {
    // Remove the last card in the list
    // Removes 1 even if there is only 1
    const lastCard = cards[cards.length - 1];
    cardcontainer.removeChild(lastCard);
  }
}
}

customElements.define('my-card', MyCard);