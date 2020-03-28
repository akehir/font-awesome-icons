import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconZhihu,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-z',
  templateUrl: './icons-z.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsZComponent {
  icons = [
    fontAwesomeIconZhihu,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
