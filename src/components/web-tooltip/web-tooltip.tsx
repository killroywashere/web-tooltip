import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'web-tooltip',
  styleUrl: 'web-tooltip.css',
  shadow: false,
})
export class WebTooltip {
  @Prop() label: string;

  render() {
    return (
      <Host>
        <div class="tooltip bottom">
          <div class="tooltiptext">{this.label}</div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
