import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

import style from '../styles/element.module.css';

@customElement('lit-custom-element')
export class LitCustomElement extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  render() {
    return html`
      <p class="text">Custom Lit Element</p>
      <p class=${style.text}>Custom Lit Element (CSS modules)</p>
      <i class="fa-solid fa-thumbs-up"></i>
    `;
  }
}
