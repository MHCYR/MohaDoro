import { css } from 'lit';

export const style = css`
  :host {
    --black: #171f26;
    --brown: #594f3b;
    --dkgreen: #56735a;
    --green: #6c8c64;
    --lightgreen: #7ca668;
  }
  body {
    background-color: var(--black);
  }

  doro-nav {
    --nav-bgcolor: var(--black);
    --nav-link: var(--green);
    --nav-link-active: var(--lightgreen);
  }
  doro-footer{
    --footer-bgcolor: var(--brown);
    --footer-link: var(--green);
  }
`;
