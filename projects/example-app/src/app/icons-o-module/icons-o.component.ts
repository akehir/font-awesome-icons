import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
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

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-o',
  templateUrl: './icons-o.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class IconsOComponent {
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

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
