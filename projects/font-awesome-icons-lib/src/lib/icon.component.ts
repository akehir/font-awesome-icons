import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
  ViewEncapsulation,
  DOCUMENT
} from '@angular/core';
import { FontAwesomeIconsRegistry } from './icons.registry';


@Component({
  selector: 'font-awesome-icon',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class FontAwesomeIconComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconsRegistry.getIcon(iconName);

    if (svgData) {
      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }

  constructor(
    private element: ElementRef,
    private iconsRegistry: FontAwesomeIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: Document,
  ) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    if (div instanceof HTMLElement) {
      div.innerHTML = svgContent;
      return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
  }
}
