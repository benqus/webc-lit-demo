export class CustomComponent extends HTMLElement {
  constructor() {
    super();

    // this.attachShadow({ mode: 'open' });

    const p = document.createElement('p');
    p.classList.add('text');
    p.innerText = 'Custom WebComponent';

    // this.shadowRoot.append(p);
    this.append(p);

    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-thumbs-up');

    // this.shadowRoot.append(i);
    this.append(i);
  }
}

customElements.define('custom-component', CustomComponent);
