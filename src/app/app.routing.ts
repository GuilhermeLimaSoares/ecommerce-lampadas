import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuyComponent } from '../app/main-area/buy/buy.component';
import { CatalogComponent } from '../app/main-area/catalog/catalog.component';
import { ViewDetailComponent } from '../app/main-area/view-detail/view-detail.component';
import { MainAreaComponent} from '../app/main-area/main-area.component';
import { CardsComponent } from './header/icon-buttons/button-user/my-account/cards/cards.component';
import { MyAccountComponent } from './header/icon-buttons/button-user/my-account/my-account.component';
import { HomeComponent } from './main-area/home/home.component';
import { OrdersComponent } from './header/icon-buttons/button-user/my-account/orders/orders.component';
import { SingUpComponent } from './../app/header/icon-buttons/button-login/sing-up/sing-up.component';
import { FavoritesComponent } from './../app/main-area/favorites/favorites.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
  // {path: '', component: AppComponent},
  // {path: '', component: MainAreaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: SingUpComponent},
  {path: 'carrinho', component: BuyComponent},
  {path: 'catalogo', component: CatalogComponent},
  {path: 'detalhe', component: ViewDetailComponent},
  {path: 'favoritos', component: FavoritesComponent},
  // {path: 'cartoes', component: CardsComponent},
  {path: 'minhaconta', component: MyAccountComponent},
  // {path: 'pedidos', component: OrdersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
