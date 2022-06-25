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

  constructor() {
    super();
    this.duration = 63;
    this.end = null;
    this.remaining = 0;
  }

  render() {
    const { remaining } = this;
    const sec = Math.floor((remaining / 1000) % 60);
    const min = Math.floor(remaining / 60000);
    return html`
      <div class="timer-wrapper">
        <h1>${`${min}:${sec}`}</h1>
        <button @click=${this.start}>Start</button>
      </div>
    `;
  }

  start() {
    this.end = Date.now() + this.duration * 1000;
    this.tick();
  }

  tick() {
    this.remaining = this.end - Date.now();
    requestAnimationFrame(() => {
      this.tick();
    });
  }

  connectedCallback() {
    super.connectedCallback();
  }
}