import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconUber,
  fontAwesomeIconUbuntu,
  fontAwesomeIconUikit,
  fontAwesomeIconUmbraco,
  fontAwesomeIconUmbrellaBeach,
  fontAwesomeIconUmbrella,
  fontAwesomeIconUnderline,
  fontAwesomeIconUniregistry,
  fontAwesomeIconUnity,
  fontAwesomeIconUniversalAccess,
  fontAwesomeIconUnlock,
  fontAwesomeIconUntappd,
  fontAwesomeIconUpload,
  fontAwesomeIconUps,
  fontAwesomeIconUsb,
  fontAwesomeIconUserAstronaut,
  fontAwesomeIconUserCheck,
  fontAwesomeIconUserClock,
  fontAwesomeIconUserGraduate,
  fontAwesomeIconUserInjured,
  fontAwesomeIconUserLock,
  fontAwesomeIconUserMinus,
  fontAwesomeIconUserNinja,
  fontAwesomeIconUserNurse,
  fontAwesomeIconUserPlus,
  fontAwesomeIconUserSecret,
  fontAwesomeIconUserShield,
  fontAwesomeIconUserSlash,
  fontAwesomeIconUserTag,
  fontAwesomeIconUserTie,
  fontAwesomeIconUser,
  fontAwesomeIconUsers,
  fontAwesomeIconUsps,
  fontAwesomeIconUssunnah,
  fontAwesomeIconUtensils,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-u',
  templateUrl: './icons-u.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsUComponent {
  icons = [
    fontAwesomeIconUber,
    fontAwesomeIconUbuntu,
    fontAwesomeIconUikit,
    fontAwesomeIconUmbraco,
    fontAwesomeIconUmbrellaBeach,
    fontAwesomeIconUmbrella,
    fontAwesomeIconUnderline,
    fontAwesomeIconUniregistry,
    fontAwesomeIconUnity,
    fontAwesomeIconUniversalAccess,
    fontAwesomeIconUnlock,
    fontAwesomeIconUntappd,
    fontAwesomeIconUpload,
    fontAwesomeIconUps,
    fontAwesomeIconUsb,
    fontAwesomeIconUserAstronaut,
    fontAwesomeIconUserCheck,
    fontAwesomeIconUserClock,
    fontAwesomeIconUserGraduate,
    fontAwesomeIconUserInjured,
    fontAwesomeIconUserLock,
    fontAwesomeIconUserMinus,
    fontAwesomeIconUserNinja,
    fontAwesomeIconUserNurse,
    fontAwesomeIconUserPlus,
    fontAwesomeIconUserSecret,
    fontAwesomeIconUserShield,
    fontAwesomeIconUserSlash,
    fontAwesomeIconUserTag,
    fontAwesomeIconUserTie,
    fontAwesomeIconUser,
    fontAwesomeIconUsers,
    fontAwesomeIconUsps,
    fontAwesomeIconUssunnah,
    fontAwesomeIconUtensils,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
