import { LitElement, html, css } from 'lit';

export class DoroNav extends LitElement {
  static get styles() {
    return css`
      nav {
        background-color: var(--nav-bgcolor);
      }

      ul {
        margin: 0;
        padding: 0 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      nav li {
        list-style: none;
      }

      nav li:first-child {
        color: var(--nav-link);
      }

      nav li a {
        color: var(--nav-link);
      }
      nav li a:hover {
        color: var(--nav-link-active);
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <ul>
          <li>
            <h1>MohaDoro</h1>
          </li>
          <li>
            <a href="https://github.com/MHCYR/MohaDoro"> GitHub </a>
          </li>
        </ul>
      </nav>
    `;
  }
}
