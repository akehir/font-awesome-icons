import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconQq,
  fontAwesomeIconQrcode,
  fontAwesomeIconQuestion,
  fontAwesomeIconQuinscape,
  fontAwesomeIconQuora,
  fontAwesomeIconQuoteLeft,
  fontAwesomeIconQuoteRight,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-q',
  templateUrl: './icons-q.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsQComponent {
  private registry = inject(FontAwesomeIconsRegistry);

  icons = [
    fontAwesomeIconQq,
    fontAwesomeIconQrcode,
    fontAwesomeIconQuestion,
    fontAwesomeIconQuinscape,
    fontAwesomeIconQuora,
    fontAwesomeIconQuoteLeft,
    fontAwesomeIconQuoteRight,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
