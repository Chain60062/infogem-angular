import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TopnavComponent } from '../../shared/components/topnav/topnav.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ProductsService } from './products.service';
import { Product } from '../../shared/models/product.model';
import { PaginatedList } from '../../shared/models/paginatedlist.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopnavComponent,
    ProductGridComponent,
    BannerComponent,
    FooterComponent,
    MatPaginatorModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  paginatedList = {
    pageIndex: 0,
  } as PaginatedList<Product>;
  pageSize = 12;
  pageIndex = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.paginatedList.pageIndex = e.pageIndex;
    this.getProducts();
    console.log(this.paginatedList.pageIndex);
    console.log(e.pageIndex);
  }

  getProducts() {
    this.productsService
      .getProducts(this.paginatedList.pageIndex, this.pageSize)
      .subscribe((paginatedList) => (this.paginatedList = paginatedList));
  }
}
