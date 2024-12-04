import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconLandmark,
  fontAwesomeIconLanguage,
  fontAwesomeIconLaptopCode,
  fontAwesomeIconLaptopMedical,
  fontAwesomeIconLaptop,
  fontAwesomeIconLaravel,
  fontAwesomeIconLastfmSquare,
  fontAwesomeIconLastfm,
  fontAwesomeIconLayerGroup,
  fontAwesomeIconLeaf,
  fontAwesomeIconLeanpub,
  fontAwesomeIconLemon,
  fontAwesomeIconLessThanEqual,
  fontAwesomeIconLessThan,
  fontAwesomeIconLess,
  fontAwesomeIconLifeRing,
  fontAwesomeIconLightbulb,
  fontAwesomeIconLine,
  fontAwesomeIconLink,
  fontAwesomeIconLinkedinIn,
  fontAwesomeIconLinkedin,
  fontAwesomeIconLinode,
  fontAwesomeIconLinux,
  fontAwesomeIconLiraSign,
  fontAwesomeIconListOl,
  fontAwesomeIconListUl,
  fontAwesomeIconList,
  fontAwesomeIconLocationArrow,
  fontAwesomeIconLockOpen,
  fontAwesomeIconLock,
  fontAwesomeIconLungsVirus,
  fontAwesomeIconLungs,
  fontAwesomeIconLyft,
} from '@triangular/font-awesome-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-l',
  templateUrl: './icons-l.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class IconsLComponent {
  icons = [
    fontAwesomeIconLandmark,
    fontAwesomeIconLanguage,
    fontAwesomeIconLaptopCode,
    fontAwesomeIconLaptopMedical,
    fontAwesomeIconLaptop,
    fontAwesomeIconLaravel,
    fontAwesomeIconLastfmSquare,
    fontAwesomeIconLastfm,
    fontAwesomeIconLayerGroup,
    fontAwesomeIconLeaf,
    fontAwesomeIconLeanpub,
    fontAwesomeIconLemon,
    fontAwesomeIconLessThanEqual,
    fontAwesomeIconLessThan,
    fontAwesomeIconLess,
    fontAwesomeIconLifeRing,
    fontAwesomeIconLightbulb,
    fontAwesomeIconLine,
    fontAwesomeIconLink,
    fontAwesomeIconLinkedinIn,
    fontAwesomeIconLinkedin,
    fontAwesomeIconLinode,
    fontAwesomeIconLinux,
    fontAwesomeIconLiraSign,
    fontAwesomeIconListOl,
    fontAwesomeIconListUl,
    fontAwesomeIconList,
    fontAwesomeIconLocationArrow,
    fontAwesomeIconLockOpen,
    fontAwesomeIconLock,
    fontAwesomeIconLungsVirus,
    fontAwesomeIconLungs,
    fontAwesomeIconLyft,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
