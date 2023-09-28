import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  };

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
            <p id="paragraph">Hi my name is Jing-Ting Dong. This is an image of me giving a thumbs up at the library while working on this coding project. I like cabbage. I also like bacon. I really like eating but it gives me food coma. Bygolly, what a dilemma.</p>  
            <!-- hide paragraph button -->
            <button class="button" id="hideButton">Details</button>
          </div>
        </div>
      </div>
      <!-- Buttons -->
      <button id="duplicateButton">Duplicate Card</button>
      <button id="toggleButton">Toggle Background</button>
      <button id="changeHeadingButton">Change Heading</button>
      <button id="removeDuplicate">Remove A Card</button>
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

constructor() {
  super();
  this.header = 'My app';
}

render() {
  return html`
    <main>
      <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
      <h1>${this.header}</h1>

      <p>Edit <code>src/MyCard.js</code> and save to reload.</p>
      <a
        class="app-link"
        href="https://open-wc.org/guides/developing-components/code-examples/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code examples
      </a>
    </main>

    <p class="app-footer">
      🚽 Made with love by
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/open-wc"
        >open-wc</a
      >.
    </p>
  `;
}

  // connectedCallback() {
  //   super.connectedCallback();

  //   // Define event listeners once in connectedCallback
  //   this.shadowRoot.querySelector('#duplicateButton').addEventListener('click', () => {
  //     this.duplicateCard();
  //   });

  //   this.shadowRoot.querySelector('#toggleButton').addEventListener('click', () => {
  //     this.toggleBackground();
  //   });

  //   this.shadowRoot.querySelector('#changeHeadingButton').addEventListener('click', () => {
  //     this.changeHeading();
  //   });

  //   this.shadowRoot.querySelector('#removeDuplicate').addEventListener('click', () => {
  //     this.removeCard();
  //   });
  // }

  // // Event handler for the "Duplicate Card" button
  // duplicateCard() {
  //   // Implement your logic for duplicating the card here
  //   // ...

  //   // Example of adding a new card
  //   const cardContainer = this.shadowRoot.querySelector('.cardcontainer');
  //   const originalCard = this.shadowRoot.querySelector('.card');
  //   const clonedCard = originalCard.cloneNode(true);
  //   cardContainer.appendChild(clonedCard);
  // }

  // // Event handler for the "Toggle Background" button
  // toggleBackground() {
  //   // Implement your logic for toggling the background here
  //   // ...

  //   // Example of toggling background color
  //   const card = this.shadowRoot.querySelector('.card');
  //   if (card.style.backgroundColor === '' || card.style.backgroundColor === 'pink') {
  //     card.style.backgroundColor = 'lightblue';
  //   } else {
  //     card.style.backgroundColor = 'pink';
  //   }
  // }

  // // Event handler for the "Change Heading" button
  // changeHeading() {
  //   // Implement your logic for changing the heading here
  //   // ...

  //   // Example of changing the heading text
  //   const heading = this.shadowRoot.querySelector('#heading');
  //   heading.textContent = 'I really like bacon and cabbage lol';
  // }

  // // Event handler for the "Remove A Card" button
  // removeCard() {
  //   // Implement your logic for removing a card here
  //   // ...

  //   // Example of removing the last card
  //   const cardContainer = this.shadowRoot.querySelector('.cardcontainer');
  //   const cards = cardContainer.querySelectorAll('.card');
  //   if (cards.length > 1) {
  //     const lastCard = cards[cards.length - 1];
  //     cardContainer.removeChild(lastCard);
  //   }
  // }
};
