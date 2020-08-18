import { html, css, LitElement, property } from 'lit-element';

export class OpenWc extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--open-wc-text-color, #000);
    }
  `;

  @property({ type: String }) name = 'Hey there';

  __increment() {
    console.log("click");
  }

  render() {
    return html`
      <button @click=${this.__increment}>increment</button>
      <slot>
      // childNodes 생성 되는부분 shadow DOM 으로 생성됨
      </slot>
    `;
  }
}
