import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { ParallaxModule} from 'ngx-parallax';
import { AppComponent } from './app.component';
import { PeopleSayComponent } from './people-say/people-say.component';
import { MailUsComponent } from './mail-us/mail-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OutstationComponent } from './service/outstation/outstation.component';
import { LocalComponent } from './service/local/local.component';
import { OurServicesComponent } from './service/our-services/our-services.component';
import { AppRoutingModule } from './/app-routing.module';
import { LuxaryComponent } from './service/luxary/luxary.component';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule} from '@angular/material';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleSayComponent,
    MailUsComponent,
    ContactUsComponent,
    FooterComponent,
    WelcomeComponent,
    OutstationComponent,
    LocalComponent,
    OurServicesComponent,
    LuxaryComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    BrowserAnimationsModule,
    ParallaxModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
