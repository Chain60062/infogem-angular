import { Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
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
