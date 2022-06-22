import { LitElement, html, css } from 'lit';

export class DoroNav extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      nav {
        background-color: #171f26;
      }

      ul {
        padding: 0 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      nav li {
        list-style: none;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <nav>
        <ul>
          <li>
            <h1>MohaDoro</h1>
          </li>
          <li>GitHub</li>
        </ul>
      </nav>
    `;
  }
}
