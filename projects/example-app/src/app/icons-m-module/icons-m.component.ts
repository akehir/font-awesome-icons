import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconMagento,
  fontAwesomeIconMagnet,
  fontAwesomeIconMailchimp,
  fontAwesomeIconMandalorian,
  fontAwesomeIconMapPin,
  fontAwesomeIconMap,
  fontAwesomeIconMarkdown,
  fontAwesomeIconMarker,
  fontAwesomeIconMarsDouble,
  fontAwesomeIconMarsStroke,
  fontAwesomeIconMars,
  fontAwesomeIconMask,
  fontAwesomeIconMastodon,
  fontAwesomeIconMaxcdn,
  fontAwesomeIconMdb,
  fontAwesomeIconMedal,
  fontAwesomeIconMedapps,
  fontAwesomeIconMedium,
  fontAwesomeIconMedrt,
  fontAwesomeIconMeetup,
  fontAwesomeIconMegaport,
  fontAwesomeIconMemory,
  fontAwesomeIconMendeley,
  fontAwesomeIconMenorah,
  fontAwesomeIconMercury,
  fontAwesomeIconMeteor,
  fontAwesomeIconMicroblog,
  fontAwesomeIconMicrochip,
  fontAwesomeIconMicrophoneSlash,
  fontAwesomeIconMicrophone,
  fontAwesomeIconMicroscope,
  fontAwesomeIconMicrosoft,
  fontAwesomeIconMinus,
  fontAwesomeIconMitten,
  fontAwesomeIconMix,
  fontAwesomeIconMixcloud,
  fontAwesomeIconMixer,
  fontAwesomeIconMizuni,
  fontAwesomeIconMobile,
  fontAwesomeIconModx,
  fontAwesomeIconMonero,
  fontAwesomeIconMoneyBillWave,
  fontAwesomeIconMoneyBill,
  fontAwesomeIconMoneyCheck,
  fontAwesomeIconMonument,
  fontAwesomeIconMoon,
  fontAwesomeIconMortarPestle,
  fontAwesomeIconMosque,
  fontAwesomeIconMotorcycle,
  fontAwesomeIconMountain,
  fontAwesomeIconMugHot,
  fontAwesomeIconMusic,
} from '@triangular/font-awesome-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-m',
  templateUrl: './icons-m.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class IconsMComponent {
  icons = [
    fontAwesomeIconMagento,
    fontAwesomeIconMagnet,
    fontAwesomeIconMailchimp,
    fontAwesomeIconMandalorian,
    fontAwesomeIconMapPin,
    fontAwesomeIconMap,
    fontAwesomeIconMarkdown,
    fontAwesomeIconMarker,
    fontAwesomeIconMarsDouble,
    fontAwesomeIconMarsStroke,
    fontAwesomeIconMars,
    fontAwesomeIconMask,
    fontAwesomeIconMastodon,
    fontAwesomeIconMaxcdn,
    fontAwesomeIconMdb,
    fontAwesomeIconMedal,
    fontAwesomeIconMedapps,
    fontAwesomeIconMedium,
    fontAwesomeIconMedrt,
    fontAwesomeIconMeetup,
    fontAwesomeIconMegaport,
    fontAwesomeIconMemory,
    fontAwesomeIconMendeley,
    fontAwesomeIconMenorah,
    fontAwesomeIconMercury,
    fontAwesomeIconMeteor,
    fontAwesomeIconMicroblog,
    fontAwesomeIconMicrochip,
    fontAwesomeIconMicrophoneSlash,
    fontAwesomeIconMicrophone,
    fontAwesomeIconMicroscope,
    fontAwesomeIconMicrosoft,
    fontAwesomeIconMinus,
    fontAwesomeIconMitten,
    fontAwesomeIconMix,
    fontAwesomeIconMixcloud,
    fontAwesomeIconMixer,
    fontAwesomeIconMizuni,
    fontAwesomeIconMobile,
    fontAwesomeIconModx,
    fontAwesomeIconMonero,
    fontAwesomeIconMoneyBillWave,
    fontAwesomeIconMoneyBill,
    fontAwesomeIconMoneyCheck,
    fontAwesomeIconMonument,
    fontAwesomeIconMoon,
    fontAwesomeIconMortarPestle,
    fontAwesomeIconMosque,
    fontAwesomeIconMotorcycle,
    fontAwesomeIconMountain,
    fontAwesomeIconMugHot,
    fontAwesomeIconMusic,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
