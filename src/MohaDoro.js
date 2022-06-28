import { LitElement, html, css } from 'lit';
import './components/doro-nav.js';
import './components/doro-timer.js';
import './components/doro-footer.js';
import { style } from './styles.js';


export class MohaDoro extends LitElement {
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
          min-height: 4vh;
        }
      `,
      style,
    ];
  }

  render() {
    return html`
      <div class="container">
        <doro-nav></doro-nav>
        <div class="main">
          <doro-timer duration="125"></doro-timer>
        </div>
        <div class="footer">
          <doro-footer></doro-footer>
        </div>
      </div>
    `;
  }
}
