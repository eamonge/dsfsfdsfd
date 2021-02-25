import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faUser, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { PricingComponent } from './pricing/pricing.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
    LandingComponent, 
    PricingComponent, 
    IndexComponent, 
    LoginComponent, 
    HeaderComponent, 
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ]
})
export class LandingModule {
  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faUser, faChevronLeft);
  }
}
