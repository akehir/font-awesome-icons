import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
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

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-q',
  templateUrl: './icons-q.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class IconsQComponent {
  icons = [
    fontAwesomeIconQq,
    fontAwesomeIconQrcode,
    fontAwesomeIconQuestion,
    fontAwesomeIconQuinscape,
    fontAwesomeIconQuora,
    fontAwesomeIconQuoteLeft,
    fontAwesomeIconQuoteRight,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
