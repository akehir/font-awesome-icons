import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
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
  fontAwesomeIconJsSquare,
  fontAwesomeIconJs,
  fontAwesomeIconJsfiddle,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-j',
  templateUrl: './icons-j.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsJComponent {
  private registry = inject(FontAwesomeIconsRegistry);

  icons = [
    fontAwesomeIconJava,
    fontAwesomeIconJediOrder,
    fontAwesomeIconJedi,
    fontAwesomeIconJenkins,
    fontAwesomeIconJira,
    fontAwesomeIconJoget,
    fontAwesomeIconJoint,
    fontAwesomeIconJoomla,
    fontAwesomeIconJsSquare,
    fontAwesomeIconJs,
    fontAwesomeIconJsfiddle,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
