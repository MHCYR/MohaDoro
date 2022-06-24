import { LitElement, html, css } from 'lit';

export class DoroTimer extends LitElement {
  static get properties() {
    return {
      duration: {},
      end: { state: true },
      remaining: { state: true },
    };
  }

  static get styles() {
    return css`
      .timer-wrapper {
        background-color: blue;
      }
    `;
  }

  render() {
    return html`
      <div class="timer-wrapper">
        <h1>Timer</h1>
      </div>
    `;
  }
}
