import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {

  fontAwesomeIconWalking,
  fontAwesomeIconWallet,
  fontAwesomeIconWarehouse,
  fontAwesomeIconWater,
  fontAwesomeIconWaveSquare,
  fontAwesomeIconWaze,
  fontAwesomeIconWeebly,
  fontAwesomeIconWeibo,
  fontAwesomeIconWeightHanging,
  fontAwesomeIconWeight,
  fontAwesomeIconWeixin,
  fontAwesomeIconWhatsappSquare,
  fontAwesomeIconWhatsapp,
  fontAwesomeIconWheelchair,
  fontAwesomeIconWhmcs,
  fontAwesomeIconWifi,
  fontAwesomeIconWikipediaW,
  fontAwesomeIconWind,
  fontAwesomeIconWindowClose,
  fontAwesomeIconWindowMaximize,
  fontAwesomeIconWindowMinimize,
  fontAwesomeIconWindowRestore,
  fontAwesomeIconWindows,
  fontAwesomeIconWineBottle,
  fontAwesomeIconWineGlassAlt,
  fontAwesomeIconWineGlass,
  fontAwesomeIconWix,
  fontAwesomeIconWizardsOfTheCoast,
  fontAwesomeIconWolfPackBattalion,
  fontAwesomeIconWonSign,
  fontAwesomeIconWordpressSimple,
  fontAwesomeIconWordpress,
  fontAwesomeIconWpbeginner,
  fontAwesomeIconWpexplorer,
  fontAwesomeIconWpforms,
  fontAwesomeIconWpressr,
  fontAwesomeIconWrench,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-w',
  templateUrl: './icons-w.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsWComponent {
  icons = [

    fontAwesomeIconWalking,
    fontAwesomeIconWallet,
    fontAwesomeIconWarehouse,
    fontAwesomeIconWater,
    fontAwesomeIconWaveSquare,
    fontAwesomeIconWaze,
    fontAwesomeIconWeebly,
    fontAwesomeIconWeibo,
    fontAwesomeIconWeightHanging,
    fontAwesomeIconWeight,
    fontAwesomeIconWeixin,
    fontAwesomeIconWhatsappSquare,
    fontAwesomeIconWhatsapp,
    fontAwesomeIconWheelchair,
    fontAwesomeIconWhmcs,
    fontAwesomeIconWifi,
    fontAwesomeIconWikipediaW,
    fontAwesomeIconWind,
    fontAwesomeIconWindowClose,
    fontAwesomeIconWindowMaximize,
    fontAwesomeIconWindowMinimize,
    fontAwesomeIconWindowRestore,
    fontAwesomeIconWindows,
    fontAwesomeIconWineBottle,
    fontAwesomeIconWineGlassAlt,
    fontAwesomeIconWineGlass,
    fontAwesomeIconWix,
    fontAwesomeIconWizardsOfTheCoast,
    fontAwesomeIconWolfPackBattalion,
    fontAwesomeIconWonSign,
    fontAwesomeIconWordpressSimple,
    fontAwesomeIconWordpress,
    fontAwesomeIconWpbeginner,
    fontAwesomeIconWpexplorer,
    fontAwesomeIconWpforms,
    fontAwesomeIconWpressr,
    fontAwesomeIconWrench,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
