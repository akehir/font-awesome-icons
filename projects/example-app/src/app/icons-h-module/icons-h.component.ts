import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconHackerNewsSquare,
  fontAwesomeIconHackerNews,
  fontAwesomeIconHackerrank,
  fontAwesomeIconHammer,
  fontAwesomeIconHamsa,
  fontAwesomeIconHandHoldingHeart,
  fontAwesomeIconHandHoldingMedical,
  fontAwesomeIconHandHolding,
  fontAwesomeIconHandLizard,
  fontAwesomeIconHandMiddleFinger,
  fontAwesomeIconHandPeace,
  fontAwesomeIconHandPointDown,
  fontAwesomeIconHandPointLeft,
  fontAwesomeIconHandPointRight,
  fontAwesomeIconHandPointUp,
  fontAwesomeIconHandPointer,
  fontAwesomeIconHandScissors,
  fontAwesomeIconHandSparkles,
  fontAwesomeIconHandSpock,
  fontAwesomeIconHands,
  fontAwesomeIconHandshakeSlash,
  fontAwesomeIconHandshake,
  fontAwesomeIconHanukiah,
  fontAwesomeIconHashtag,
  fontAwesomeIconHatCowboySide,
  fontAwesomeIconHatCowboy,
  fontAwesomeIconHatWizard,
  fontAwesomeIconHeadSideCoughSlash,
  fontAwesomeIconHeadSideCough,
  fontAwesomeIconHeadSideMask,
  fontAwesomeIconHeadSideVirus,
  fontAwesomeIconHeading,
  fontAwesomeIconHeadphones,
  fontAwesomeIconHeadset,
  fontAwesomeIconHeart,
  fontAwesomeIconHelicopter,
  fontAwesomeIconHighlighter,
  fontAwesomeIconHippo,
  fontAwesomeIconHips,
  fontAwesomeIconHireAHelper,
  fontAwesomeIconHockeyPuck,
  fontAwesomeIconHollyBerry,
  fontAwesomeIconHooli,
  fontAwesomeIconHornbill,
  fontAwesomeIconHorseHead,
  fontAwesomeIconHorse,
  fontAwesomeIconHospitalUser,
  fontAwesomeIconHospital,
  fontAwesomeIconHotdog,
  fontAwesomeIconHotel,
  fontAwesomeIconHotjar,
  fontAwesomeIconHourglassEnd,
  fontAwesomeIconHourglassStart,
  fontAwesomeIconHourglass,
  fontAwesomeIconHouseUser,
  fontAwesomeIconHouzz,
  fontAwesomeIconHtml5,
  fontAwesomeIconHubspot,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-h',
  templateUrl: './icons-h.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsHComponent {
  icons = [
    fontAwesomeIconHackerNewsSquare,
    fontAwesomeIconHackerNews,
    fontAwesomeIconHackerrank,
    fontAwesomeIconHammer,
    fontAwesomeIconHamsa,
    fontAwesomeIconHandHoldingHeart,
    fontAwesomeIconHandHoldingMedical,
    fontAwesomeIconHandHolding,
    fontAwesomeIconHandLizard,
    fontAwesomeIconHandMiddleFinger,
    fontAwesomeIconHandPeace,
    fontAwesomeIconHandPointDown,
    fontAwesomeIconHandPointLeft,
    fontAwesomeIconHandPointRight,
    fontAwesomeIconHandPointUp,
    fontAwesomeIconHandPointer,
    fontAwesomeIconHandScissors,
    fontAwesomeIconHandSparkles,
    fontAwesomeIconHandSpock,
    fontAwesomeIconHands,
    fontAwesomeIconHandshakeSlash,
    fontAwesomeIconHandshake,
    fontAwesomeIconHanukiah,
    fontAwesomeIconHashtag,
    fontAwesomeIconHatCowboySide,
    fontAwesomeIconHatCowboy,
    fontAwesomeIconHatWizard,
    fontAwesomeIconHeadSideCoughSlash,
    fontAwesomeIconHeadSideCough,
    fontAwesomeIconHeadSideMask,
    fontAwesomeIconHeadSideVirus,
    fontAwesomeIconHeading,
    fontAwesomeIconHeadphones,
    fontAwesomeIconHeadset,
    fontAwesomeIconHeart,
    fontAwesomeIconHelicopter,
    fontAwesomeIconHighlighter,
    fontAwesomeIconHippo,
    fontAwesomeIconHips,
    fontAwesomeIconHireAHelper,
    fontAwesomeIconHockeyPuck,
    fontAwesomeIconHollyBerry,
    fontAwesomeIconHooli,
    fontAwesomeIconHornbill,
    fontAwesomeIconHorseHead,
    fontAwesomeIconHorse,
    fontAwesomeIconHospitalUser,
    fontAwesomeIconHospital,
    fontAwesomeIconHotdog,
    fontAwesomeIconHotel,
    fontAwesomeIconHotjar,
    fontAwesomeIconHourglassEnd,
    fontAwesomeIconHourglassStart,
    fontAwesomeIconHourglass,
    fontAwesomeIconHouseUser,
    fontAwesomeIconHouzz,
    fontAwesomeIconHtml5,
    fontAwesomeIconHubspot,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
