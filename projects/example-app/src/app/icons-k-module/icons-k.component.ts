import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
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
  private registry = inject(FontAwesomeIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
