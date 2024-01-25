import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TopnavComponent } from '../../shared/topnav/topnav.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductsService } from './products.service';
import { Product } from '../product/product.interface';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    TopnavComponent,
    ProductGridComponent,
    BannerComponent,
    FooterComponent,
    MatPaginatorModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent{
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  // ngOnInit(): void {
  //   this.products = this.productsService.getProducts();
  // }
}
