import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesComponent } from './features/features.component';
import { IndexComponent } from './index/index.component';
import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: "", component: IndexComponent },
      { path: "pricing", component: PricingComponent },
      { path: "features", component: FeaturesComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
