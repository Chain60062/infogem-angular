import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TopnavComponent } from '../../components/topnav/topnav.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TopnavComponent,
    ProductGridComponent,
    BannerComponent,
    FooterComponent,
    MatPaginatorModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
