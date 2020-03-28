export const ngModule = `import { NgModule } from '@angular/core';
import { FontAwesomeIconsModule } from '@triangular/font-awesome-icons';

@NgModule({
    declarations: [
    ],
    imports: [
      FontAwesomeIconsModule,
    ],
    providers: [],
    bootstrap: [],
})
export class AppModule { }
`;

export const component = `import { Component } from '@angular/core';
import { FontAwesomeIconsRegistry } from '@triangular/font-awesome-icons';
import {
  fontAwesomeIconAnkh,
  // add more icons here
} from '@triangular/font-awesome-icons/icons';

@Component({
  selector: 'app-some-component-with-icons',
  template: '<font-awesome-icon name="ankh"></font-awesome-icon>',
  styles: 'svg { color: #ccc; fill: currentColor; width: 5rem; height: 5rem; }',
})
export class SomeComponentWithIcons {

  constructor(private registry: FontAwesomeIconsRegistry) {
    registry.registerIcons([
      fontAwesomeIconAnkh,
      // add more icons here
    ]);
  }
}`;

export const usage = `<font-awesome-icon name="ankh"></font-awesome-icon>`;
