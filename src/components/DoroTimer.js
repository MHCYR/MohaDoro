import { LitElement, html, css } from 'lit';

function pad(value) {
  return String(value).padStart(2, '0');
}

function parseToSec(val) {
  const num = Number(val);
  return pad(Math.floor((num / 1000) % 60));
}

function parseToMins(val) {
  const num = Number(val);
  return pad(Math.floor(num / 60000));
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
      h1 {
        font-size: 10rem;
      }
      .timer-wrapper {
        display: flex;
      }
      /* MOBILE */
      @media (max-width: 400px) {
        .timer-wrapper {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
        }

        .countdown {
          flex-basis: 100%;
        }

        .countdown h1 {
          font-size: 6em;
          text-align: center;
        }
      }
    `;
  }

  constructor() {
    super();
    this.duration = 60;
    this.end = null;
    this.remaining = 0;
    this.running = false;
  }

  render() {
    const { remaining, duration } = this;
    const durationMilisec = duration * 1000;
    const sec = remaining ? parseToSec(remaining) : parseToSec(durationMilisec);
    const min = remaining
      ? parseToMins(remaining)
      : parseToMins(durationMilisec);
    return html`
      <div class="timer-wrapper">
        <div class="countdown">
          <h1>${`${min}:${sec}`}</h1>
        </div>
        <div class="buttons">
          <button @click=${this.start} ?disabled="${this.running}">
            ${!this.remaining ? 'Start' : 'Continue'}
          </button>
          <button @click=${this.pause} ?disabled="${!this.running}">
            Pause
          </button>
          <button @click=${this.reset}>Reset</button>
        </div>
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

  reset() {
    this.remaining = 0;
    this.end = null;
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
