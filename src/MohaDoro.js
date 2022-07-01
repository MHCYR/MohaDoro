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
        doro-timer {
          grid-column-start: 3;
          grid-column-end: 9;
          grid-row-start: 2;
          grid-row-end: 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer {
          grid-column-start: 1;
          grid-column-end: 11;
          grid-row-start: 3;
          grid-row-end: 4;
          background-color: var(--dkgreen);
        }

        @media (max-width: 400px) {
          .main {
            grid-column-start: 2;
            grid-column-end: 10;
          }
        }
      `,
      style,
    ];
  }

  constructor() {
    super();
    this.duration = 1500;
  }

  render() {
    return html`
      <div class="container">
        <doro-nav></doro-nav>
        <doro-timer duration="${this.duration}"></doro-timer>
        <button @click=${this.addMins}>+5min</button>
        <button @click=${this.substractMins}>-5min</button>
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
