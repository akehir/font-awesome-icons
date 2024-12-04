import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconICursor,
  fontAwesomeIconIceCream,
  fontAwesomeIconIcicles,
  fontAwesomeIconIcons,
  fontAwesomeIconIdBadge,
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

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-i',
  templateUrl: './icons-i.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class IconsIComponent {
  icons = [
    fontAwesomeIconICursor,
    fontAwesomeIconIceCream,
    fontAwesomeIconIcicles,
    fontAwesomeIconIcons,
    fontAwesomeIconIdBadge,
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
