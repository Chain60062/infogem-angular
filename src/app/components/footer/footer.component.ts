import { Component, afterNextRender } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  gridBreakpoint = 1;
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
