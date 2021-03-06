import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconEarlybirds,
  fontAwesomeIconEbay,
  fontAwesomeIconEdge,
  fontAwesomeIconEdit,
  fontAwesomeIconEgg,
  fontAwesomeIconEject,
  fontAwesomeIconElementor,
  fontAwesomeIconEllipsisH,
  fontAwesomeIconEllipsisV,
  fontAwesomeIconEllo,
  fontAwesomeIconEmber,
  fontAwesomeIconEmpire,
  fontAwesomeIconEnvelopeOpenText,
  fontAwesomeIconEnvelopeOpen,
  fontAwesomeIconEnvelopeSquare,
  fontAwesomeIconEnvelope,
  fontAwesomeIconEnvira,
  fontAwesomeIconEquals,
  fontAwesomeIconEraser,
  fontAwesomeIconErlang,
  fontAwesomeIconEthereum,
  fontAwesomeIconEthernet,
  fontAwesomeIconEtsy,
  fontAwesomeIconEuroSign,
  fontAwesomeIconEvernote,
  fontAwesomeIconExchangeAlt,
  fontAwesomeIconExclamationCircle,
  fontAwesomeIconExclamationTriangle,
  fontAwesomeIconExclamation,
  fontAwesomeIconExpandAlt,
  fontAwesomeIconExpandArrowsAlt,
  fontAwesomeIconExpand,
  fontAwesomeIconExpeditedssl,
  fontAwesomeIconExternalLinkAlt,
  fontAwesomeIconExternalLinkSquareAlt,
  fontAwesomeIconEyeDropper,
  fontAwesomeIconEyeSlash,
  fontAwesomeIconEye,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-e',
  templateUrl: './icons-e.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconsEComponent {
  icons = [
    fontAwesomeIconEarlybirds,
    fontAwesomeIconEbay,
    fontAwesomeIconEdge,
    fontAwesomeIconEdit,
    fontAwesomeIconEgg,
    fontAwesomeIconEject,
    fontAwesomeIconElementor,
    fontAwesomeIconEllipsisH,
    fontAwesomeIconEllipsisV,
    fontAwesomeIconEllo,
    fontAwesomeIconEmber,
    fontAwesomeIconEmpire,
    fontAwesomeIconEnvelopeOpenText,
    fontAwesomeIconEnvelopeOpen,
    fontAwesomeIconEnvelopeSquare,
    fontAwesomeIconEnvelope,
    fontAwesomeIconEnvira,
    fontAwesomeIconEquals,
    fontAwesomeIconEraser,
    fontAwesomeIconErlang,
    fontAwesomeIconEthereum,
    fontAwesomeIconEthernet,
    fontAwesomeIconEtsy,
    fontAwesomeIconEuroSign,
    fontAwesomeIconEvernote,
    fontAwesomeIconExchangeAlt,
    fontAwesomeIconExclamationCircle,
    fontAwesomeIconExclamationTriangle,
    fontAwesomeIconExclamation,
    fontAwesomeIconExpandAlt,
    fontAwesomeIconExpandArrowsAlt,
    fontAwesomeIconExpand,
    fontAwesomeIconExpeditedssl,
    fontAwesomeIconExternalLinkAlt,
    fontAwesomeIconExternalLinkSquareAlt,
    fontAwesomeIconEyeDropper,
    fontAwesomeIconEyeSlash,
    fontAwesomeIconEye,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
