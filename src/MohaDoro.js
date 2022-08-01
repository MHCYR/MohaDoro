import { LitElement, html, css } from 'lit';
import './components/doro-nav.js';
import './components/doro-timer.js';
import { style } from './styles.js';

export class MohaDoro extends LitElement {
  static get properties() {
    return {
      duration: { state: true },
    };
  }

  static get styles() {
    return [
      css`
        .container {
          min-height: 100vh;
          background-color: var(--black);
          color: whitesmoke;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: 75px auto 25px;
          row-gap: 2em;
        }
        doro-nav {
          grid-column-start: 1;
          grid-column-end: 11;
          grid-row-start: 1;
          grid-row-end: 2;
        }

        .main {
          grid-column-start: 3;
          grid-column-end: 9;
          grid-row-start: 2;
          grid-row-end: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2em;
        }

        .footer {
          grid-column-start: 1;
          grid-column-end: 11;
          grid-row-start: 3;
          grid-row-end: 4;
          background-color: var(--dkgreen);
        }

        .buttons-wrapper {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 15px;
        }

        button {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          padding: 0;
          color: #56735a;
          border: none;
          font-size: 25px;
          font-weight: 700;
        }

        button:hover {
          color: white;
          background-color: #6c8c64;
        }

        @media (max-width: 450px) {
          .main {
            grid-column-start: 2;
            grid-column-end: 10;
            gap: 15px;
          }

          .buttons-wrapper {
            margin-top: 10px;
          }
        }
      `,
      style,
    ];
  }

  constructor() {
    super();
    this.duration = 60000;
  }

  render() {
    return html`
      <div class="container">
        <doro-nav></doro-nav>
        <div class="main">
          <div class="buttons-wrapper">
            <button @click=${this.addMins}>+</button>
            <button @click=${this.substractMins}>-</button>
          </div>
          <doro-timer duration=${this.duration}></doro-timer>
        </div>
        <div class="footer">footer</div>
      </div>
    `;
  }

  addMins() {
    this.duration += 300;
  }

  substractMins() {
    if (this.duration > 300) this.duration -= 300;
  }
}
