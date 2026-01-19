import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
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
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsXComponent {
  private registry = inject(FontAwesomeIconsRegistry);

  icons = [
    fontAwesomeIconXRay,
    fontAwesomeIconXbox,
    fontAwesomeIconXingSquare,
    fontAwesomeIconXing,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
