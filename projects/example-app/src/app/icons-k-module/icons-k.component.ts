import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconKaaba,
  fontAwesomeIconKaggle,
  fontAwesomeIconKey,
  fontAwesomeIconKeybase,
  fontAwesomeIconKeyboard,
  fontAwesomeIconKeycdn,
  fontAwesomeIconKhanda,
  fontAwesomeIconKickstarterK,
  fontAwesomeIconKickstarter,
  fontAwesomeIconKissBeam,
  fontAwesomeIconKissWinkHeart,
  fontAwesomeIconKiss,
  fontAwesomeIconKiwiBird,
  fontAwesomeIconKorvue,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-k',
  templateUrl: './icons-k.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsKComponent {
  icons = [
    fontAwesomeIconKaaba,
    fontAwesomeIconKaggle,
    fontAwesomeIconKey,
    fontAwesomeIconKeybase,
    fontAwesomeIconKeyboard,
    fontAwesomeIconKeycdn,
    fontAwesomeIconKhanda,
    fontAwesomeIconKickstarterK,
    fontAwesomeIconKickstarter,
    fontAwesomeIconKissBeam,
    fontAwesomeIconKissWinkHeart,
    fontAwesomeIconKiss,
    fontAwesomeIconKiwiBird,
    fontAwesomeIconKorvue,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
