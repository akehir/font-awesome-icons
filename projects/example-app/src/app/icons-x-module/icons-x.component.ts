import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconXRay,
  fontAwesomeIconXbox,
  fontAwesomeIconXingSquare,
  fontAwesomeIconXing,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-x',
  templateUrl: './icons-x.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsXComponent {
  icons = [
    fontAwesomeIconXRay,
    fontAwesomeIconXbox,
    fontAwesomeIconXingSquare,
    fontAwesomeIconXing,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
