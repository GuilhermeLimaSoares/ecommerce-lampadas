import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { OffertsComponent } from './main-area/offerts/offerts.component';
import { IconButtonsComponent } from './header/icon-buttons/icon-buttons.component';
import { ButtonLoginComponent } from './header/icon-buttons/button-login/button-login.component';
import { SingUpComponent } from './header/icon-buttons/button-login/sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainAreaComponent,
    OffertsComponent,
    IconButtonsComponent,
    ButtonLoginComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
