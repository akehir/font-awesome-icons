import { Component, ViewEncapsulation } from '@angular/core';
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
