import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
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

@Component({
  selector: 'app-icons-l',
  templateUrl: './icons-l.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsLComponent {
  private registry = inject(FontAwesomeIconsRegistry);

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

  constructor() {
    const registry = this.registry;

    registry.registerIcons(this.icons);
  }

}
