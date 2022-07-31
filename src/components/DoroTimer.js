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
      remaining: {
        state: true,
      },
      running: { state: true },
      countdown: { state: true },
      finished: {
        state: true,
      },
    };
  }

  static get styles() {
    return css`
      h1 {
        font-size: 10rem;
        margin: 0;
      }

      button {
        width: 95px;
        background-color: var(--btns-bgcolor);
        border: none;
        padding: 1em 1.5em;
        border-radius: 10px;
        color: white;
      }

      button:hover {
        background-color: var(--btns-hover-bgcolor);
      }

      button:disabled,
      button[disabled] button:hover {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: var(--btns-bgcolor);
      }

      .timer-wrapper {
        display: flex;
        align-items: center;
        gap: 2em;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      /* MOBILE */
      @media (max-width: 450px) {
        .timer-wrapper {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          gap: 0;
        }

        .countdown {
          flex-basis: 100%;
        }

        .countdown h1 {
          font-size: 6em;
          text-align: center;
        }

        .buttons {
          flex-basis: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
      }
    `;
  }

  constructor() {
    super();
    this.duration = 3000;
    this.remaining = this.duration;
    this.running = false;
  }

  render() {
    const { remaining } = this;
    const sec = parseToSec(remaining);
    const min = parseToMins(remaining);
    return html`
      <div class="timer-wrapper">
        <div class="countdown">
          <h1>${`${min}:${sec}`}</h1>
        </div>
        <div class="buttons">
          <button
            @click=${this.start}
            ?disabled=${this.running || this.finished}
          >
            Start
          </button>
          <button
            @click=${this.pause}
            ?disabled=${!this.running || this.finished}
          >
            Pause
          </button>
          <button @click=${this.reset}>Reset</button>
        </div>
      </div>
    `;
  }

  start() {
    this.running = true;
    this.countdown = setInterval(() => {
      this.remaining -= 1000;
    }, 1000);
  }

  pause() {
    this.running = false;
    clearInterval(this.countdown);
  }

  reset() {
    clearInterval(this.countdown);
    this.remaining = this.duration;
    this.running = false;
  }

  get finished() {
    if (this.remaining <= 0) clearInterval(this.countdown);
    return this.remaining <= 0;
  }

  connectedCallback() {
    super.connectedCallback();
  }
}
