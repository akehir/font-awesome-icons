import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [RouterLinkActive, RouterLink, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'example-app-standalone';
}
