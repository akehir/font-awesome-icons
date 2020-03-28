import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconICursor,
  fontAwesomeIconIceCream,
  fontAwesomeIconIcicles,
  fontAwesomeIconIcons,
  fontAwesomeIconIdBadge,
  fontAwesomeIconIdCardAlt,
  fontAwesomeIconIdCard,
  fontAwesomeIconIdeal,
  fontAwesomeIconIgloo,
  fontAwesomeIconImage,
  fontAwesomeIconImages,
  fontAwesomeIconImdb,
  fontAwesomeIconInbox,
  fontAwesomeIconIndent,
  fontAwesomeIconIndustry,
  fontAwesomeIconInfinity,
  fontAwesomeIconInfoCircle,
  fontAwesomeIconInfo,
  fontAwesomeIconInstagramSquare,
  fontAwesomeIconInstagram,
  fontAwesomeIconIntercom,
  fontAwesomeIconInternetExplorer,
  fontAwesomeIconInvision,
  fontAwesomeIconIoxhost,
  fontAwesomeIconItalic,
  fontAwesomeIconItchIo,
  fontAwesomeIconItunesNote,
  fontAwesomeIconItunes,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-i',
  templateUrl: './icons-i.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsIComponent {
  icons = [
    fontAwesomeIconICursor,
    fontAwesomeIconIceCream,
    fontAwesomeIconIcicles,
    fontAwesomeIconIcons,
    fontAwesomeIconIdBadge,
    fontAwesomeIconIdCardAlt,
    fontAwesomeIconIdCard,
    fontAwesomeIconIdeal,
    fontAwesomeIconIgloo,
    fontAwesomeIconImage,
    fontAwesomeIconImages,
    fontAwesomeIconImdb,
    fontAwesomeIconInbox,
    fontAwesomeIconIndent,
    fontAwesomeIconIndustry,
    fontAwesomeIconInfinity,
    fontAwesomeIconInfoCircle,
    fontAwesomeIconInfo,
    fontAwesomeIconInstagramSquare,
    fontAwesomeIconInstagram,
    fontAwesomeIconIntercom,
    fontAwesomeIconInternetExplorer,
    fontAwesomeIconInvision,
    fontAwesomeIconIoxhost,
    fontAwesomeIconItalic,
    fontAwesomeIconItchIo,
    fontAwesomeIconItunesNote,
    fontAwesomeIconItunes,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
