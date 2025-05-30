import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconDAndDBeyond,
  fontAwesomeIconDAndD,
  fontAwesomeIconDailymotion,
  fontAwesomeIconDashcube,
  fontAwesomeIconDatabase,
  fontAwesomeIconDelicious,
  fontAwesomeIconDemocrat,
  fontAwesomeIconDeploydog,
  fontAwesomeIconDeskpro,
  fontAwesomeIconDesktop,
  fontAwesomeIconDev,
  fontAwesomeIconDeviantart,
  fontAwesomeIconDharmachakra,
  fontAwesomeIconDhl,
  fontAwesomeIconDiaspora,
  fontAwesomeIconDiceD20,
  fontAwesomeIconDiceD6,
  fontAwesomeIconDiceFive,
  fontAwesomeIconDiceFour,
  fontAwesomeIconDiceOne,
  fontAwesomeIconDiceSix,
  fontAwesomeIconDiceThree,
  fontAwesomeIconDiceTwo,
  fontAwesomeIconDice,
  fontAwesomeIconDigg,
  fontAwesomeIconDigitalOcean,
  fontAwesomeIconDiscord,
  fontAwesomeIconDiscourse,
  fontAwesomeIconDisease,
  fontAwesomeIconDivide,
  fontAwesomeIconDna,
  fontAwesomeIconDochub,
  fontAwesomeIconDocker,
  fontAwesomeIconDog,
  fontAwesomeIconDollarSign,
  fontAwesomeIconDolly,
  fontAwesomeIconDoorClosed,
  fontAwesomeIconDoorOpen,
  fontAwesomeIconDove,
  fontAwesomeIconDownload,
  fontAwesomeIconDraft2Digital,
  fontAwesomeIconDragon,
  fontAwesomeIconDrawPolygon,
  fontAwesomeIconDribbbleSquare,
  fontAwesomeIconDribbble,
  fontAwesomeIconDropbox,
  fontAwesomeIconDrumSteelpan,
  fontAwesomeIconDrum,
  fontAwesomeIconDrumstickBite,
  fontAwesomeIconDrupal,
  fontAwesomeIconDumbbell,
  fontAwesomeIconDumpsterFire,
  fontAwesomeIconDumpster,
  fontAwesomeIconDungeon,
  fontAwesomeIconDyalog,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-d',
  templateUrl: './icons-d.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsDComponent {
  icons = [
    fontAwesomeIconDAndDBeyond,
    fontAwesomeIconDAndD,
    fontAwesomeIconDailymotion,
    fontAwesomeIconDashcube,
    fontAwesomeIconDatabase,
    fontAwesomeIconDelicious,
    fontAwesomeIconDemocrat,
    fontAwesomeIconDeploydog,
    fontAwesomeIconDeskpro,
    fontAwesomeIconDesktop,
    fontAwesomeIconDev,
    fontAwesomeIconDeviantart,
    fontAwesomeIconDharmachakra,
    fontAwesomeIconDhl,
    fontAwesomeIconDiaspora,
    fontAwesomeIconDiceD20,
    fontAwesomeIconDiceD6,
    fontAwesomeIconDiceFive,
    fontAwesomeIconDiceFour,
    fontAwesomeIconDiceOne,
    fontAwesomeIconDiceSix,
    fontAwesomeIconDiceThree,
    fontAwesomeIconDiceTwo,
    fontAwesomeIconDice,
    fontAwesomeIconDigg,
    fontAwesomeIconDigitalOcean,
    fontAwesomeIconDiscord,
    fontAwesomeIconDiscourse,
    fontAwesomeIconDisease,
    fontAwesomeIconDivide,
    fontAwesomeIconDna,
    fontAwesomeIconDochub,
    fontAwesomeIconDocker,
    fontAwesomeIconDog,
    fontAwesomeIconDollarSign,
    fontAwesomeIconDolly,
    fontAwesomeIconDoorClosed,
    fontAwesomeIconDoorOpen,
    fontAwesomeIconDove,
    fontAwesomeIconDownload,
    fontAwesomeIconDraft2Digital,
    fontAwesomeIconDragon,
    fontAwesomeIconDrawPolygon,
    fontAwesomeIconDribbbleSquare,
    fontAwesomeIconDribbble,
    fontAwesomeIconDropbox,
    fontAwesomeIconDrumSteelpan,
    fontAwesomeIconDrum,
    fontAwesomeIconDrumstickBite,
    fontAwesomeIconDrupal,
    fontAwesomeIconDumbbell,
    fontAwesomeIconDumpsterFire,
    fontAwesomeIconDumpster,
    fontAwesomeIconDungeon,
    fontAwesomeIconDyalog,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
