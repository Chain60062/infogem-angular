import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent, title: 'Carrinho' },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'product/:id/:slug', component: ProductComponent },
  { path: '**', component: NotfoundComponent, title: '404 - Não Encontrado' },
  // { path: 'product/:id/', redirectTo: '/product/:id', pathMatch: 'full' },
];
