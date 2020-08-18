import { html, css, LitElement, property } from 'lit-element';

export class Accordion_Button extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--open-wc-text-color, #000);
    }
  `;

  @property({ type: String }) name = 'Hey there';
  @property({ type: Boolean }) open = false;
  AccordionClick() {
    this.open = !this.open;
    console.log("click");
  }

  render() {
    return html`
      <button @click=${this.AccordionClick}>Accordion-Button</button>
      <div style="display: ${this.open ? `none`: null }">
         <slot>// childNodes 생성 되는부분 shadow DOM 으로 생성됨

         </slot>
      </div>
    `;
  }
}
