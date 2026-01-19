import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconObjectGroup,
  fontAwesomeIconObjectUngroup,
  fontAwesomeIconOdnoklassnikiSquare,
  fontAwesomeIconOdnoklassniki,
  fontAwesomeIconOilCan,
  fontAwesomeIconOldRepublic,
  fontAwesomeIconOm,
  fontAwesomeIconOpencart,
  fontAwesomeIconOpenid,
  fontAwesomeIconOpera,
  fontAwesomeIconOptinMonster,
  fontAwesomeIconOrcid,
  fontAwesomeIconOsi,
  fontAwesomeIconOtter,
  fontAwesomeIconOutdent,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-o',
  templateUrl: './icons-o.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsOComponent {
  private registry = inject(FontAwesomeIconsRegistry);

  icons = [
    fontAwesomeIconObjectGroup,
    fontAwesomeIconObjectUngroup,
    fontAwesomeIconOdnoklassnikiSquare,
    fontAwesomeIconOdnoklassniki,
    fontAwesomeIconOilCan,
    fontAwesomeIconOldRepublic,
    fontAwesomeIconOm,
    fontAwesomeIconOpencart,
    fontAwesomeIconOpenid,
    fontAwesomeIconOpera,
    fontAwesomeIconOptinMonster,
    fontAwesomeIconOrcid,
    fontAwesomeIconOsi,
    fontAwesomeIconOtter,
    fontAwesomeIconOutdent,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
