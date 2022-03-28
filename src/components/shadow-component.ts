export class ShadowComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const p = document.createElement('p');
    p.classList.add('text');
    p.innerText = 'Shadow WebComponent';

    this.shadowRoot.append(p);

    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-thumbs-up');

    this.shadowRoot.append(i);
  }
}

customElements.define('shadow-component', ShadowComponent);
