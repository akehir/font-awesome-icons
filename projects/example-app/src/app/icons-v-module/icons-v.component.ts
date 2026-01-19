import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconVaadin,
  fontAwesomeIconVectorSquare,
  fontAwesomeIconVenusDouble,
  fontAwesomeIconVenusMars,
  fontAwesomeIconVenus,
  fontAwesomeIconViacoin,
  fontAwesomeIconViadeoSquare,
  fontAwesomeIconViadeo,
  fontAwesomeIconVial,
  fontAwesomeIconVials,
  fontAwesomeIconViber,
  fontAwesomeIconVideoSlash,
  fontAwesomeIconVideo,
  fontAwesomeIconVihara,
  fontAwesomeIconVimeoSquare,
  fontAwesomeIconVimeoV,
  fontAwesomeIconVimeo,
  fontAwesomeIconVine,
  fontAwesomeIconVirusSlash,
  fontAwesomeIconVirus,
  fontAwesomeIconViruses,
  fontAwesomeIconVk,
  fontAwesomeIconVnv,
  fontAwesomeIconVoicemail,
  fontAwesomeIconVolumeOff,
  fontAwesomeIconVrCardboard,
  fontAwesomeIconVuejs,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-v',
  templateUrl: './icons-v.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsVComponent {
  private registry = inject(FontAwesomeIconsRegistry);

  icons = [
    fontAwesomeIconVaadin,
    fontAwesomeIconVectorSquare,
    fontAwesomeIconVenusDouble,
    fontAwesomeIconVenusMars,
    fontAwesomeIconVenus,
    fontAwesomeIconViacoin,
    fontAwesomeIconViadeoSquare,
    fontAwesomeIconViadeo,
    fontAwesomeIconVial,
    fontAwesomeIconVials,
    fontAwesomeIconViber,
    fontAwesomeIconVideoSlash,
    fontAwesomeIconVideo,
    fontAwesomeIconVihara,
    fontAwesomeIconVimeoSquare,
    fontAwesomeIconVimeoV,
    fontAwesomeIconVimeo,
    fontAwesomeIconVine,
    fontAwesomeIconVirusSlash,
    fontAwesomeIconVirus,
    fontAwesomeIconViruses,
    fontAwesomeIconVk,
    fontAwesomeIconVnv,
    fontAwesomeIconVoicemail,
    fontAwesomeIconVolumeOff,
    fontAwesomeIconVrCardboard,
    fontAwesomeIconVuejs,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
