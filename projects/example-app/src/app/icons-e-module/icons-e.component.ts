import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconEarlybirds,
  fontAwesomeIconEbay,
  fontAwesomeIconEdge,
  fontAwesomeIconEgg,
  fontAwesomeIconEject,
  fontAwesomeIconElementor,
  fontAwesomeIconEllo,
  fontAwesomeIconEmber,
  fontAwesomeIconEmpire,
  fontAwesomeIconEnvelopeOpenText,
  fontAwesomeIconEnvelopeOpen,
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
  fontAwesomeIconExclamation,
  fontAwesomeIconExpand,
  fontAwesomeIconExpeditedssl,
  fontAwesomeIconEyeDropper,
  fontAwesomeIconEyeSlash,
  fontAwesomeIconEye,
} from '@triangular/font-awesome-icons/icons';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-icons-e',
  templateUrl: './icons-e.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class IconsEComponent {
  icons = [
    fontAwesomeIconEarlybirds,
    fontAwesomeIconEbay,
    fontAwesomeIconEdge,
    fontAwesomeIconEgg,
    fontAwesomeIconEject,
    fontAwesomeIconElementor,
    fontAwesomeIconEllo,
    fontAwesomeIconEmber,
    fontAwesomeIconEmpire,
    fontAwesomeIconEnvelopeOpenText,
    fontAwesomeIconEnvelopeOpen,
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
    fontAwesomeIconExclamation,
    fontAwesomeIconExpand,
    fontAwesomeIconExpeditedssl,
    fontAwesomeIconEyeDropper,
    fontAwesomeIconEyeSlash,
    fontAwesomeIconEye,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
