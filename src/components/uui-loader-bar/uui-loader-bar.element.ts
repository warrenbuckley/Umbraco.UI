import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 *  @element uui-loader-bar
 * @description - Linear loader for indicating loading.
 */

// TODO try changing brightness hack to opacity
export class UUILoaderBarElement extends LitElement {
  static styles = [
    css`
      :host {
        --uui-loader-bar-color: var(--uui-interface-chosen, #1b264f);
        display: block;
        position: relative;
        height: var(--uui-size-half-base-unit, 3px);
        overflow: hidden;
        border-radius: var(--uui-size-half-base-unit, 3px);
        transform: scaleY(1);
        transform-origin: 0 50%;
        background-color: var(--uui-loader-bar-color, #1b264f);
        transition: transform 300ms ease-in;
      }

      :host([hidden]) {
        transform: scaleY(0);
      }

      #bar1 {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        background-color: var(--uui-loader-bar-color, #1b264f);
        transform-origin: top left;
        animation: translate-bar 1.5s infinite linear;
      }

      @keyframes translate-bar {
        0% {
          transform: translateX(-150%);
          filter: brightness(100%);
        }

        10% {
          animation-timing-function: cubic-bezier(0.5, 0, 0.7, 0.45);
          transform: translateX(-150%);
          filter: brightness(150%);
        }

        50% {
          animation-timing-function: cubic-bezier(0.3, 0.4, 0.5, 0.9);
          transform: translateX(-61%);
          filter: brightness(330%);
        }

        100% {
          transform: translateX(100%);
          filter: brightness(100%);
        }
      }
    `,
  ];

  @property({ type: Boolean, reflect: true })
  hidden = false;

  render() {
    return html` <div id="bar1"></div>`;
  }
}
