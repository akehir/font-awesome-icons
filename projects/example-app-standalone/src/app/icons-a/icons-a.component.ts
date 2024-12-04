import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FontAwesomeIconComponent, FontAwesomeIconsRegistry,} from '@triangular/font-awesome-icons';

import {
  fontAwesomeIcon500Px,
  fontAwesomeIconAccessibleIcon,
  fontAwesomeIconAccusoft,
  fontAwesomeIconAddressBook,
  fontAwesomeIconAddressCard,
  fontAwesomeIconAdn,
  fontAwesomeIconAdversal,
  fontAwesomeIconAffiliatetheme,
  fontAwesomeIconAirbnb,
  fontAwesomeIconAlgolia,
  fontAwesomeIconAlignCenter,
  fontAwesomeIconAlignJustify,
  fontAwesomeIconAlignLeft,
  fontAwesomeIconAlignRight,
  fontAwesomeIconAlipay,
  fontAwesomeIconAmazonPay,
  fontAwesomeIconAmazon,
  fontAwesomeIconAmilia,
  fontAwesomeIconAnchor,
  fontAwesomeIconAndroid,
  fontAwesomeIconAngellist,
  fontAwesomeIconAngleDown,
  fontAwesomeIconAngleLeft,
  fontAwesomeIconAngleRight,
  fontAwesomeIconAngleUp,
  fontAwesomeIconAngrycreative,
  fontAwesomeIconAngular,
  fontAwesomeIconAnkh,
  fontAwesomeIconAppStoreIos,
  fontAwesomeIconAppStore,
  fontAwesomeIconApper,
  fontAwesomeIconApplePay,
  fontAwesomeIconApple,
  fontAwesomeIconArchway,
  fontAwesomeIconArrowDown,
  fontAwesomeIconArrowLeft,
  fontAwesomeIconArrowRight,
  fontAwesomeIconArrowUp,
  fontAwesomeIconArtstation,
  fontAwesomeIconAsterisk,
  fontAwesomeIconAsymmetrik,
  fontAwesomeIconAt,
  fontAwesomeIconAtlassian,
  fontAwesomeIconAtom,
  fontAwesomeIconAudible,
  fontAwesomeIconAudioDescription,
  fontAwesomeIconAutoprefixer,
  fontAwesomeIconAvianex,
  fontAwesomeIconAviato,
  fontAwesomeIconAward,
  fontAwesomeIconAws,
} from '@triangular/font-awesome-icons/icons';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-icons-a',
    templateUrl: './icons-a.component.html',
    styleUrls: [],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgForOf,
        FontAwesomeIconComponent
    ]
})
export class IconsAComponent {
  icons = [
    fontAwesomeIcon500Px,
    fontAwesomeIconAccessibleIcon,
    fontAwesomeIconAccusoft,
    fontAwesomeIconAddressBook,
    fontAwesomeIconAddressCard,
    fontAwesomeIconAdn,
    fontAwesomeIconAdversal,
    fontAwesomeIconAffiliatetheme,
    fontAwesomeIconAirbnb,
    fontAwesomeIconAlgolia,
    fontAwesomeIconAlignCenter,
    fontAwesomeIconAlignJustify,
    fontAwesomeIconAlignLeft,
    fontAwesomeIconAlignRight,
    fontAwesomeIconAlipay,
    fontAwesomeIconAmazonPay,
    fontAwesomeIconAmazon,
    fontAwesomeIconAmilia,
    fontAwesomeIconAnchor,
    fontAwesomeIconAndroid,
    fontAwesomeIconAngellist,
    fontAwesomeIconAngleDown,
    fontAwesomeIconAngleLeft,
    fontAwesomeIconAngleRight,
    fontAwesomeIconAngleUp,
    fontAwesomeIconAngrycreative,
    fontAwesomeIconAngular,
    fontAwesomeIconAnkh,
    fontAwesomeIconAppStoreIos,
    fontAwesomeIconAppStore,
    fontAwesomeIconApper,
    fontAwesomeIconApplePay,
    fontAwesomeIconApple,
    fontAwesomeIconArchway,
    fontAwesomeIconArrowDown,
    fontAwesomeIconArrowLeft,
    fontAwesomeIconArrowRight,
    fontAwesomeIconArrowUp,
    fontAwesomeIconArtstation,
    fontAwesomeIconAsterisk,
    fontAwesomeIconAsymmetrik,
    fontAwesomeIconAt,
    fontAwesomeIconAtlassian,
    fontAwesomeIconAtom,
    fontAwesomeIconAudible,
    fontAwesomeIconAudioDescription,
    fontAwesomeIconAutoprefixer,
    fontAwesomeIconAvianex,
    fontAwesomeIconAviato,
    fontAwesomeIconAward,
    fontAwesomeIconAws,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
