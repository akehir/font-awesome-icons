import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconPage4,
  fontAwesomeIconPagelines,
  fontAwesomeIconPager,
  fontAwesomeIconPaintRoller,
  fontAwesomeIconPalette,
  fontAwesomeIconPalfed,
  fontAwesomeIconPallet,
  fontAwesomeIconPaperPlane,
  fontAwesomeIconPaperclip,
  fontAwesomeIconParachuteBox,
  fontAwesomeIconParagraph,
  fontAwesomeIconPassport,
  fontAwesomeIconPaste,
  fontAwesomeIconPatreon,
  fontAwesomeIconPause,
  fontAwesomeIconPaw,
  fontAwesomeIconPaypal,
  fontAwesomeIconPeace,
  fontAwesomeIconPenFancy,
  fontAwesomeIconPenNib,
  fontAwesomeIconPen,
  fontAwesomeIconPepperHot,
  fontAwesomeIconPercent,
  fontAwesomeIconPeriscope,
  fontAwesomeIconPersonBooth,
  fontAwesomeIconPhabricator,
  fontAwesomeIconPhoenixFramework,
  fontAwesomeIconPhoenixSquadron,
  fontAwesomeIconPhoneSlash,
  fontAwesomeIconPhoneVolume,
  fontAwesomeIconPhone,
  fontAwesomeIconPhp,
  fontAwesomeIconPiedPiperAlt,
  fontAwesomeIconPiedPiperHat,
  fontAwesomeIconPiedPiperPp,
  fontAwesomeIconPiedPiperSquare,
  fontAwesomeIconPiedPiper,
  fontAwesomeIconPiggyBank,
  fontAwesomeIconPills,
  fontAwesomeIconPinterestP,
  fontAwesomeIconPinterestSquare,
  fontAwesomeIconPinterest,
  fontAwesomeIconPizzaSlice,
  fontAwesomeIconPlaceOfWorship,
  fontAwesomeIconPlaneArrival,
  fontAwesomeIconPlaneDeparture,
  fontAwesomeIconPlaneSlash,
  fontAwesomeIconPlane,
  fontAwesomeIconPlay,
  fontAwesomeIconPlaystation,
  fontAwesomeIconPlug,
  fontAwesomeIconPlus,
  fontAwesomeIconPodcast,
  fontAwesomeIconPooStorm,
  fontAwesomeIconPoo,
  fontAwesomeIconPoop,
  fontAwesomeIconPowerOff,
  fontAwesomeIconPrescriptionBottle,
  fontAwesomeIconPrescription,
  fontAwesomeIconPrint,
  fontAwesomeIconProductHunt,
  fontAwesomeIconPumpMedical,
  fontAwesomeIconPumpSoap,
  fontAwesomeIconPushed,
  fontAwesomeIconPuzzlePiece,
  fontAwesomeIconPython,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-p',
  templateUrl: './icons-p.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsPComponent {
  icons = [
    fontAwesomeIconPage4,
    fontAwesomeIconPagelines,
    fontAwesomeIconPager,
    fontAwesomeIconPaintRoller,
    fontAwesomeIconPalette,
    fontAwesomeIconPalfed,
    fontAwesomeIconPallet,
    fontAwesomeIconPaperPlane,
    fontAwesomeIconPaperclip,
    fontAwesomeIconParachuteBox,
    fontAwesomeIconParagraph,
    fontAwesomeIconPassport,
    fontAwesomeIconPaste,
    fontAwesomeIconPatreon,
    fontAwesomeIconPause,
    fontAwesomeIconPaw,
    fontAwesomeIconPaypal,
    fontAwesomeIconPeace,
    fontAwesomeIconPenFancy,
    fontAwesomeIconPenNib,
    fontAwesomeIconPen,
    fontAwesomeIconPepperHot,
    fontAwesomeIconPercent,
    fontAwesomeIconPeriscope,
    fontAwesomeIconPersonBooth,
    fontAwesomeIconPhabricator,
    fontAwesomeIconPhoenixFramework,
    fontAwesomeIconPhoenixSquadron,
    fontAwesomeIconPhoneSlash,
    fontAwesomeIconPhoneVolume,
    fontAwesomeIconPhone,
    fontAwesomeIconPhp,
    fontAwesomeIconPiedPiperAlt,
    fontAwesomeIconPiedPiperHat,
    fontAwesomeIconPiedPiperPp,
    fontAwesomeIconPiedPiperSquare,
    fontAwesomeIconPiedPiper,
    fontAwesomeIconPiggyBank,
    fontAwesomeIconPills,
    fontAwesomeIconPinterestP,
    fontAwesomeIconPinterestSquare,
    fontAwesomeIconPinterest,
    fontAwesomeIconPizzaSlice,
    fontAwesomeIconPlaceOfWorship,
    fontAwesomeIconPlaneArrival,
    fontAwesomeIconPlaneDeparture,
    fontAwesomeIconPlaneSlash,
    fontAwesomeIconPlane,
    fontAwesomeIconPlay,
    fontAwesomeIconPlaystation,
    fontAwesomeIconPlug,
    fontAwesomeIconPlus,
    fontAwesomeIconPodcast,
    fontAwesomeIconPooStorm,
    fontAwesomeIconPoo,
    fontAwesomeIconPoop,
    fontAwesomeIconPowerOff,
    fontAwesomeIconPrescriptionBottle,
    fontAwesomeIconPrescription,
    fontAwesomeIconPrint,
    fontAwesomeIconProductHunt,
    fontAwesomeIconPumpMedical,
    fontAwesomeIconPumpSoap,
    fontAwesomeIconPushed,
    fontAwesomeIconPuzzlePiece,
    fontAwesomeIconPython,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
