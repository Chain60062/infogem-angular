import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from './product.service';
import { TopnavComponent } from '../../shared/topnav/topnav.component';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product.interface';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, TopnavComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.getProduct(id);
  }
  getProduct(id: number) {
    this.productService
      .getProductById(id)
      .subscribe((product) => (this.product = product));
  }
}
