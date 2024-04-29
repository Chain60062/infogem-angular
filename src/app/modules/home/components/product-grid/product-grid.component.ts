import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Breakpoint } from '../../../../shared/classes/breakpoint';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ProductsService } from '../../products.service';
import { Product } from '../../../../shared/models/product.model';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [MatGridListModule, ProductCardComponent, RouterModule],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css',
})
export class ProductGridComponent extends Breakpoint {
  @Input() products: Product[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private productsService: ProductsService
  ) {
    super(breakpointObserver);
  }
}
