import { ModuleWithProviders, NgModule } from '@angular/core';
import { FontAwesomeIconComponent } from './icon.component';
import { FontAwesomeIconsRegistry } from './icons.registry';

@NgModule({
  declarations: [],
  imports: [FontAwesomeIconComponent],
  exports: [FontAwesomeIconComponent]
})
export class FontAwesomeIconsModule {
  static forRoot(): ModuleWithProviders<FontAwesomeIconsModule> {
    return {
      ngModule: FontAwesomeIconsModule,
      providers: [
        FontAwesomeIconsRegistry,
      ],
    };
  }
}
