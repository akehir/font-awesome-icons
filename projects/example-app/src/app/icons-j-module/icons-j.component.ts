import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconJava,
  fontAwesomeIconJediOrder,
  fontAwesomeIconJedi,
  fontAwesomeIconJenkins,
  fontAwesomeIconJira,
  fontAwesomeIconJoget,
  fontAwesomeIconJoint,
  fontAwesomeIconJoomla,
  fontAwesomeIconJournalWhills,
  fontAwesomeIconJsSquare,
  fontAwesomeIconJs,
  fontAwesomeIconJsfiddle,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-j',
  templateUrl: './icons-j.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsJComponent {
  icons = [
    fontAwesomeIconJava,
    fontAwesomeIconJediOrder,
    fontAwesomeIconJedi,
    fontAwesomeIconJenkins,
    fontAwesomeIconJira,
    fontAwesomeIconJoget,
    fontAwesomeIconJoint,
    fontAwesomeIconJoomla,
    fontAwesomeIconJournalWhills,
    fontAwesomeIconJsSquare,
    fontAwesomeIconJs,
    fontAwesomeIconJsfiddle,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
