import style from '../styles/element.module.css';

export class CustomComponent extends HTMLElement {
  constructor() {
    super();

    // this.attachShadow({ mode: 'open' });

    const p1 = document.createElement('p');
    p1.classList.add('text');
    p1.innerText = 'Custom WebComponent';
    // this.shadowRoot.append(p1);
    this.append(p1);

    const p2 = document.createElement('p');
    p2.classList.add(style.text);
    p2.innerText = 'Custom WebComponent (CSS Modules)';
    // this.shadowRoot.append(p2);
    this.append(p2);

    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-thumbs-up');

    // this.shadowRoot.append(i);
    this.append(i);
  }
}

customElements.define('custom-component', CustomComponent);
