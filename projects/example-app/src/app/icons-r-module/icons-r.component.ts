import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconRProject,
  fontAwesomeIconRadiationAlt,
  fontAwesomeIconRadiation,
  fontAwesomeIconRainbow,
  fontAwesomeIconRandom,
  fontAwesomeIconRaspberryPi,
  fontAwesomeIconRavelry,
  fontAwesomeIconReact,
  fontAwesomeIconReacteurope,
  fontAwesomeIconReadme,
  fontAwesomeIconRebel,
  fontAwesomeIconReceipt,
  fontAwesomeIconRecordVinyl,
  fontAwesomeIconRecycle,
  fontAwesomeIconRedRiver,
  fontAwesomeIconRedditAlien,
  fontAwesomeIconRedditSquare,
  fontAwesomeIconReddit,
  fontAwesomeIconRedhat,
  fontAwesomeIconRedoAlt,
  fontAwesomeIconRedo,
  fontAwesomeIconRegistered,
  fontAwesomeIconRemoveFormat,
  fontAwesomeIconRenren,
  fontAwesomeIconReplyAll,
  fontAwesomeIconReply,
  fontAwesomeIconReplyd,
  fontAwesomeIconRepublican,
  fontAwesomeIconResearchgate,
  fontAwesomeIconResolving,
  fontAwesomeIconRestroom,
  fontAwesomeIconRetweet,
  fontAwesomeIconRev,
  fontAwesomeIconRibbon,
  fontAwesomeIconRing,
  fontAwesomeIconRoad,
  fontAwesomeIconRobot,
  fontAwesomeIconRocket,
  fontAwesomeIconRocketchat,
  fontAwesomeIconRockrms,
  fontAwesomeIconRoute,
  fontAwesomeIconRssSquare,
  fontAwesomeIconRss,
  fontAwesomeIconRubleSign,
  fontAwesomeIconRulerCombined,
  fontAwesomeIconRulerHorizontal,
  fontAwesomeIconRulerVertical,
  fontAwesomeIconRuler,
  fontAwesomeIconRunning,
  fontAwesomeIconRupeeSign,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-r',
  templateUrl: './icons-r.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsRComponent {
  icons = [
    fontAwesomeIconRProject,
    fontAwesomeIconRadiationAlt,
    fontAwesomeIconRadiation,
    fontAwesomeIconRainbow,
    fontAwesomeIconRandom,
    fontAwesomeIconRaspberryPi,
    fontAwesomeIconRavelry,
    fontAwesomeIconReact,
    fontAwesomeIconReacteurope,
    fontAwesomeIconReadme,
    fontAwesomeIconRebel,
    fontAwesomeIconReceipt,
    fontAwesomeIconRecordVinyl,
    fontAwesomeIconRecycle,
    fontAwesomeIconRedRiver,
    fontAwesomeIconRedditAlien,
    fontAwesomeIconRedditSquare,
    fontAwesomeIconReddit,
    fontAwesomeIconRedhat,
    fontAwesomeIconRedoAlt,
    fontAwesomeIconRedo,
    fontAwesomeIconRegistered,
    fontAwesomeIconRemoveFormat,
    fontAwesomeIconRenren,
    fontAwesomeIconReplyAll,
    fontAwesomeIconReply,
    fontAwesomeIconReplyd,
    fontAwesomeIconRepublican,
    fontAwesomeIconResearchgate,
    fontAwesomeIconResolving,
    fontAwesomeIconRestroom,
    fontAwesomeIconRetweet,
    fontAwesomeIconRev,
    fontAwesomeIconRibbon,
    fontAwesomeIconRing,
    fontAwesomeIconRoad,
    fontAwesomeIconRobot,
    fontAwesomeIconRocket,
    fontAwesomeIconRocketchat,
    fontAwesomeIconRockrms,
    fontAwesomeIconRoute,
    fontAwesomeIconRssSquare,
    fontAwesomeIconRss,
    fontAwesomeIconRubleSign,
    fontAwesomeIconRulerCombined,
    fontAwesomeIconRulerHorizontal,
    fontAwesomeIconRulerVertical,
    fontAwesomeIconRuler,
    fontAwesomeIconRunning,
    fontAwesomeIconRupeeSign,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}