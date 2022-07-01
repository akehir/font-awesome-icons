import { Component, ViewEncapsulation } from '@angular/core';
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
})
export class IconsYComponent {
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

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
