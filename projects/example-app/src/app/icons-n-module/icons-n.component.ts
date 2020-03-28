import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconNapster,
  fontAwesomeIconNeos,
  fontAwesomeIconNetworkWired,
  fontAwesomeIconNeuter,
  fontAwesomeIconNewspaper,
  fontAwesomeIconNimblr,
  fontAwesomeIconNodeJs,
  fontAwesomeIconNode,
  fontAwesomeIconNotEqual,
  fontAwesomeIconNotesMedical,
  fontAwesomeIconNpm,
  fontAwesomeIconNs8,
  fontAwesomeIconNutritionix,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-n',
  templateUrl: './icons-n.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsNComponent {
  icons = [
    fontAwesomeIconNapster,
    fontAwesomeIconNeos,
    fontAwesomeIconNetworkWired,
    fontAwesomeIconNeuter,
    fontAwesomeIconNewspaper,
    fontAwesomeIconNimblr,
    fontAwesomeIconNodeJs,
    fontAwesomeIconNode,
    fontAwesomeIconNotEqual,
    fontAwesomeIconNotesMedical,
    fontAwesomeIconNpm,
    fontAwesomeIconNs8,
    fontAwesomeIconNutritionix,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
