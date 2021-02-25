import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class AppIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far);
    library.addIconPacks(fab);
    library.addIconPacks(fal);
    library.addIconPacks(fad);
  }
}
