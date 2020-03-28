import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconQq,
  fontAwesomeIconQrcode,
  fontAwesomeIconQuestionCircle,
  fontAwesomeIconQuestion,
  fontAwesomeIconQuidditch,
  fontAwesomeIconQuinscape,
  fontAwesomeIconQuora,
  fontAwesomeIconQuoteLeft,
  fontAwesomeIconQuoteRight,
  fontAwesomeIconQuran,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-q',
  templateUrl: './icons-q.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsQComponent {
  icons = [
    fontAwesomeIconQq,
    fontAwesomeIconQrcode,
    fontAwesomeIconQuestionCircle,
    fontAwesomeIconQuestion,
    fontAwesomeIconQuidditch,
    fontAwesomeIconQuinscape,
    fontAwesomeIconQuora,
    fontAwesomeIconQuoteLeft,
    fontAwesomeIconQuoteRight,
    fontAwesomeIconQuran,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
