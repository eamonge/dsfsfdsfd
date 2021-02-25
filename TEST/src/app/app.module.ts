import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  bootstrap: [AppComponent],
  exports: [SharedModule, /* FontAwesomeModule */]
  // providers: [LoggingService]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far);
    library.addIconPacks(fab);
  }
}
