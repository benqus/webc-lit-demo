import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

import style from '../styles/element.module.css';

@customElement('lit-shadow-element')
export class ShadowElement extends LitElement {
  render() {
    return html`
      <p class="text">Shadow Lit Element</p>
      <p class=${style.text}>Shadow Lit Element (CSS modules)</p>
      <i class="fa-solid fa-thumbs-up"></i>
    `;
  }
}
