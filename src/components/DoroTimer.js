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
      .countdown {
        padding: 0 1em;
        border: solid 5px transparent;
        border-radius: 15px;
      }
      .border-red {
        border: solid 5px red;
        border-radius: 15px;
      }
      .border-green {
        border: solid 5px green;
        border-radius: 15px;
      }
      .border-orange {
        border: solid 5px orange;
        border-radius: 15px;
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
          margin-bottom: 1em;
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
    // TODO: convert duration from seconds to miliseconds
    // this.duration = 300;
    // this.remaining = this.duration;
    this.running = false;
  }

  render() {
    const { remaining } = this;
    const remainingToMilisec = remaining * 1000;
    const sec = parseToSec(remainingToMilisec);
    const min = parseToMins(remainingToMilisec);
    const currClass = this.setClass();
    return html`
      <div class="timer-wrapper ">
        <div class="countdown ${currClass}">
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

  attributeChangedCallback(name, _old, value) {
    if (name === 'duration') {
      this.remaining = Number(value);
      this.duration = Number(value);
    }
  }

  start() {
    this.running = true;
    this.countdown = setInterval(() => {
      this.remaining -= 1;
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

  setClass() {
    const classes = {
      running: 'border-green',
      finished: 'border-red',
      paused: 'border-orange',
    };

    if (this.finished) {
      return classes.finished;
    }
    if (this.running) {
      return classes.running;
    }
    if (this.remaining > 0 && this.remaining < Number(this.duration)) {
      return classes.paused;
    }
    return '';
  }

  get finished() {
    if (this.remaining <= 0) clearInterval(this.countdown);
    return this.remaining <= 0;
  }
}
