import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconYCombinator,
  fontAwesomeIconYahoo,
  fontAwesomeIconYammer,
  fontAwesomeIconYandexInternational,
  fontAwesomeIconYandex,
  fontAwesomeIconYarn,
  fontAwesomeIconYelp,
  fontAwesomeIconYenSign,
  fontAwesomeIconYinYang,
  fontAwesomeIconYoast,
  fontAwesomeIconYoutubeSquare,
  fontAwesomeIconYoutube,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-y',
  templateUrl: './icons-y.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsYComponent {
  private registry = inject(FontAwesomeIconsRegistry);

  icons = [
    fontAwesomeIconYCombinator,
    fontAwesomeIconYahoo,
    fontAwesomeIconYammer,
    fontAwesomeIconYandexInternational,
    fontAwesomeIconYandex,
    fontAwesomeIconYarn,
    fontAwesomeIconYelp,
    fontAwesomeIconYenSign,
    fontAwesomeIconYinYang,
    fontAwesomeIconYoast,
    fontAwesomeIconYoutubeSquare,
    fontAwesomeIconYoutube,
  ];

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
