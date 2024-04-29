import { Routes } from '@angular/router';
import { CartComponent } from './modules/cart/cart.component';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProductComponent } from './modules/product/product.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent, title: 'Carrinho' },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'product/:id/:slug', component: ProductComponent },
  { path: 'login', component: LoginComponent, title: 'Realizar Login' },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Realizar Cadastro',
  },
  { path: '**', component: NotfoundComponent, title: '404 - Não Encontrado' },
  // { path: 'product/:id/', redirectTo: '/product/:id', pathMatch: 'full' },
];
