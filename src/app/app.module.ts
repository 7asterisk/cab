import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MzSidenavModule,
} from 'ngx-materialize';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleSayComponent } from './people-say/people-say.component';
import { MailUsComponent } from './mail-us/mail-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleSayComponent,
    MailUsComponent,
    ContactUsComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    BrowserAnimationsModule,
    MzSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
