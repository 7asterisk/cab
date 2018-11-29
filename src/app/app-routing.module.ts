import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OutstationComponent } from './service/outstation/outstation.component';
import { LocalComponent } from './service/local/local.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PeopleSayComponent } from './people-say/people-say.component';
import { OurServicesComponent } from './service/our-services/our-services.component';
import { LuxaryComponent } from './service/luxary/luxary.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'ourServices', component: OurServicesComponent },
  { path: 'outstation', component: OutstationComponent },
  { path: 'local', component: LocalComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'peopleSay', component: PeopleSayComponent },
  { path: '', component: WelcomeComponent },
  { path: 'luxury', component: LuxaryComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
 }
