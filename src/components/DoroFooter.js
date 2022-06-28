import { LitElement, html, css} from 'lit';

export class DoroFooter extends LitElement {
  static get styles(){
    return css`
    footer{
      background-color: var(--footer-bgcolor);
      width: 100%;
      height: 200px;
    }
    
    ul{
      margin: 0;
      padding: 0 4rem;
      display:flex;
      align-items: center;
      justify-content: flex-end;
    }
    
    li{
      list-style: none;
      margin-left: 15px;
    }
    small{
      display: flex;
      justify-content: flex-end;
      margin-right: 50px;
      margin-top: 5px;
    }`;
  }
  
  render() {
    return html`
      <footer>
        <div>
          <ul>
          <li><a href='https://discord.gg/gYWvu6nh'>Discord</a></li>
          <li><a href='https://twitter.com/Moha_rm'>Twitter</a></li>
          <li><a href='https://www.linkedin.com/in/moharm'>Linkedin</a></li>
          </ul>
          <small>
            "Copyright © 2022 | Made with "
            <a href='https://lit.dev/'>Lit</a>
          </small>
        </div>
      </footer>
    `;
  }
}
