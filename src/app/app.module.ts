import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FirstNamePipe } from '../pipes/first-name.pipe';
import { SmallDescPipe } from '../pipes/small-desc.pipe';
import { AuthenticationService } from '../services/authentication.service';
import { FavoritesService } from '../services/favorites.service';
import { ViewService } from '../services/view.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UserService } from '../services/user.service';
import { ProductsService } from '../services/products.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { OffertsComponent } from './main-area/offerts/offerts.component';
import { IconButtonsComponent } from './header/icon-buttons/icon-buttons.component';
import { ButtonLoginComponent } from './header/icon-buttons/button-login/button-login.component';
import { SingUpComponent } from './header/icon-buttons/button-login/sing-up/sing-up.component';
import { ViewProductComponent } from './main-area/view-product/view-product.component';
import { ButtonUserComponent } from './header/icon-buttons/button-user/button-user.component';
import { MyAccountComponent } from './header/icon-buttons/button-user/my-account/my-account.component';
import { OrdersComponent } from './header/icon-buttons/button-user/my-account/orders/orders.component';
import { CardsComponent } from './header/icon-buttons/button-user/my-account/cards/cards.component';
import { HomeComponent } from './main-area/home/home.component';
import { CatalogComponent } from './main-area/catalog/catalog.component';
import { FavoritesComponent } from './main-area/favorites/favorites.component';
import { ButtonItensComponent } from './header/icon-buttons/button-itens/button-itens.component';
import { ButtonShoppingComponent } from './header/icon-buttons/button-shopping/button-shopping.component';
import { IconFavoriteComponent } from './main-area/favorites/icon-favorite/icon-favorite.component';
import { BuyComponent } from './main-area/buy/buy.component';
import { IconBuyComponent } from './main-area/buy/icon-buy/icon-buy.component';
import { ViewDetailComponent } from './main-area/view-detail/view-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainAreaComponent,
    OffertsComponent,
    IconButtonsComponent,
    ButtonLoginComponent,
    SingUpComponent,
    ViewProductComponent,
    ButtonUserComponent,
    MyAccountComponent,
    OrdersComponent,
    CardsComponent,
    HomeComponent,
    FirstNamePipe,
    SmallDescPipe,
    CatalogComponent,
    FavoritesComponent,
    ButtonItensComponent,
    ButtonShoppingComponent,
    IconFavoriteComponent,
    BuyComponent,
    IconBuyComponent,
    ViewDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    // AppRoutingModule
  ],
  providers: [AuthenticationService, FavoritesService, ProductsService, ShoppingCartService, UserService, ViewService],
  bootstrap: [AppComponent],
  // exports: [FirstNamePipe],
})
export class AppModule { }
