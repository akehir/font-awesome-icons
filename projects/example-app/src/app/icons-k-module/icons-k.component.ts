import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
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
  fontAwesomeIconKiwiBird,
  fontAwesomeIconKorvue,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-k',
  templateUrl: './icons-k.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
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
    fontAwesomeIconKiwiBird,
    fontAwesomeIconKorvue,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
