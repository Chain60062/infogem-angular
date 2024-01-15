import { Component, afterNextRender } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [MatGridListModule, ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css',
})
export class ProductGridComponent {
  products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  gridBreakpoint = 2;
  breakpoints = new Map([
    [600, 1],
    [900, 2],
    [1300, 3],
  ]);

  constructor() {
    afterNextRender(() => {
      this.setGridBreakpoint(window.innerWidth);
      window.addEventListener('resize', this.handleResize);
    });
  }

  setGridBreakpoint(width: number) {
    let columns = 4; //default max value
    for (const [breakWidth, cols] of this.breakpoints) {
      if (width <= breakWidth) {
        columns = cols;
        break;
      }
    }
    this.gridBreakpoint = columns;
  }

  handleResize = (event: Event) => {
    const target = event.target as Window;
    this.setGridBreakpoint(target.innerWidth);
  };
}
