import { LitElement, html, css } from 'lit';
import './components/doro-nav.js';
import { style } from './styles.js';

export class MohaDoro extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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
          background-color: var(--brown);
        }

        .footer {
          grid-column-start: 1;
          grid-column-end: 11;
          grid-row-start: 3;
          grid-row-end: 4;
          background-color: var(--dkgreen);
        }
      `,
      style,
    ];
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <div class="container">
        <doro-nav></doro-nav>
        <div class="main">main</div>
        <div class="footer">footer</div>
      </div>
    `;
  }
}
