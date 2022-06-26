import { LitElement, html, css } from 'lit';

function pad(value) {
  return String(value).padStart(2, '0');
}

export class DoroTimer extends LitElement {
  static get properties() {
    return {
      duration: {},
      end: { state: true },
      remaining: { state: true },
      running: { state: true },
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
    this.running = false;
  }

  render() {
    const { remaining } = this;
    const sec = pad(Math.floor((remaining / 1000) % 60));
    const min = pad(Math.floor(remaining / 60000));
    return html`
      <div class="timer-wrapper">
        <h1>${`${min}:${sec}`}</h1>
        <button @click=${this.start} ?disabled="${this.running}">
          ${!this.remaining ? 'Start' : 'Continue'}
        </button>
        <button @click=${this.pause} ?disabled="${!this.running}">Pause</button>
      </div>
    `;
  }

  start() {
    this.running = true;
    this.end = this.end
      ? Date.now() + this.remaining
      : Date.now() + this.duration * 1000;
    this.tick();
  }

  pause() {
    this.running = false;
  }

  tick() {
    if (this.running) {
      this.remaining = this.end - Date.now();
      requestAnimationFrame(() => {
        this.tick();
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }
}
