import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import { FontAwesomeIconsRegistry, } from '@triangular/font-awesome-icons';

import {
  fontAwesomeIconBabyCarriage,
  fontAwesomeIconBaby,
  fontAwesomeIconBackward,
  fontAwesomeIconBacon,
  fontAwesomeIconBahai,
  fontAwesomeIconBan,
  fontAwesomeIconBandcamp,
  fontAwesomeIconBarcode,
  fontAwesomeIconBars,
  fontAwesomeIconBath,
  fontAwesomeIconBatteryEmpty,
  fontAwesomeIconBatteryFull,
  fontAwesomeIconBatteryHalf,
  fontAwesomeIconBatteryQuarter,
  fontAwesomeIconBatteryThreeQuarters,
  fontAwesomeIconBattleNet,
  fontAwesomeIconBed,
  fontAwesomeIconBehanceSquare,
  fontAwesomeIconBehance,
  fontAwesomeIconBellSlash,
  fontAwesomeIconBell,
  fontAwesomeIconBezierCurve,
  fontAwesomeIconBicycle,
  fontAwesomeIconBimobject,
  fontAwesomeIconBinoculars,
  fontAwesomeIconBiohazard,
  fontAwesomeIconBitbucket,
  fontAwesomeIconBitcoin,
  fontAwesomeIconBity,
  fontAwesomeIconBlackTie,
  fontAwesomeIconBlackberry,
  fontAwesomeIconBlenderPhone,
  fontAwesomeIconBlender,
  fontAwesomeIconBlog,
  fontAwesomeIconBloggerB,
  fontAwesomeIconBlogger,
  fontAwesomeIconBluetoothB,
  fontAwesomeIconBluetooth,
  fontAwesomeIconBold,
  fontAwesomeIconBolt,
  fontAwesomeIconBomb,
  fontAwesomeIconBone,
  fontAwesomeIconBong,
  fontAwesomeIconBookMedical,
  fontAwesomeIconBookOpen,
  fontAwesomeIconBook,
  fontAwesomeIconBookmark,
  fontAwesomeIconBootstrap,
  fontAwesomeIconBorderAll,
  fontAwesomeIconBorderNone,
  fontAwesomeIconBowlingBall,
  fontAwesomeIconBoxOpen,
  fontAwesomeIconBoxTissue,
  fontAwesomeIconBox,
  fontAwesomeIconBraille,
  fontAwesomeIconBrain,
  fontAwesomeIconBreadSlice,
  fontAwesomeIconBriefcaseMedical,
  fontAwesomeIconBriefcase,
  fontAwesomeIconBroom,
  fontAwesomeIconBrush,
  fontAwesomeIconBtc,
  fontAwesomeIconBuffer,
  fontAwesomeIconBug,
  fontAwesomeIconBuilding,
  fontAwesomeIconBullhorn,
  fontAwesomeIconBullseye,
  fontAwesomeIconBuromobelexperte,
  fontAwesomeIconBus,
  fontAwesomeIconBusinessTime,
  fontAwesomeIconBuyNLarge,
  fontAwesomeIconBuysellads,
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-icons-b',
  templateUrl: './icons-b.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false // eslint-disable-line @angular-eslint/prefer-standalone
})
export class IconsBComponent {
  icons = [
    fontAwesomeIconBabyCarriage,
    fontAwesomeIconBaby,
    fontAwesomeIconBackward,
    fontAwesomeIconBacon,
    fontAwesomeIconBahai,
    fontAwesomeIconBan,
    fontAwesomeIconBandcamp,
    fontAwesomeIconBarcode,
    fontAwesomeIconBars,
    fontAwesomeIconBath,
    fontAwesomeIconBatteryEmpty,
    fontAwesomeIconBatteryFull,
    fontAwesomeIconBatteryHalf,
    fontAwesomeIconBatteryQuarter,
    fontAwesomeIconBatteryThreeQuarters,
    fontAwesomeIconBattleNet,
    fontAwesomeIconBed,
    fontAwesomeIconBehanceSquare,
    fontAwesomeIconBehance,
    fontAwesomeIconBellSlash,
    fontAwesomeIconBell,
    fontAwesomeIconBezierCurve,
    fontAwesomeIconBicycle,
    fontAwesomeIconBimobject,
    fontAwesomeIconBinoculars,
    fontAwesomeIconBiohazard,
    fontAwesomeIconBitbucket,
    fontAwesomeIconBitcoin,
    fontAwesomeIconBity,
    fontAwesomeIconBlackTie,
    fontAwesomeIconBlackberry,
    fontAwesomeIconBlenderPhone,
    fontAwesomeIconBlender,
    fontAwesomeIconBlog,
    fontAwesomeIconBloggerB,
    fontAwesomeIconBlogger,
    fontAwesomeIconBluetoothB,
    fontAwesomeIconBluetooth,
    fontAwesomeIconBold,
    fontAwesomeIconBolt,
    fontAwesomeIconBomb,
    fontAwesomeIconBone,
    fontAwesomeIconBong,
    fontAwesomeIconBookMedical,
    fontAwesomeIconBookOpen,
    fontAwesomeIconBook,
    fontAwesomeIconBookmark,
    fontAwesomeIconBootstrap,
    fontAwesomeIconBorderAll,
    fontAwesomeIconBorderNone,
    fontAwesomeIconBowlingBall,
    fontAwesomeIconBoxOpen,
    fontAwesomeIconBoxTissue,
    fontAwesomeIconBox,
    fontAwesomeIconBraille,
    fontAwesomeIconBrain,
    fontAwesomeIconBreadSlice,
    fontAwesomeIconBriefcaseMedical,
    fontAwesomeIconBriefcase,
    fontAwesomeIconBroom,
    fontAwesomeIconBrush,
    fontAwesomeIconBtc,
    fontAwesomeIconBuffer,
    fontAwesomeIconBug,
    fontAwesomeIconBuilding,
    fontAwesomeIconBullhorn,
    fontAwesomeIconBullseye,
    fontAwesomeIconBuromobelexperte,
    fontAwesomeIconBus,
    fontAwesomeIconBusinessTime,
    fontAwesomeIconBuyNLarge,
    fontAwesomeIconBuysellads,
  ];

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons(this.icons);
  }

}
