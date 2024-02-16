import { MatGridListModule } from '@angular/material/grid-list';
import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoint } from '../classes/breakpoint';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent extends Breakpoint implements OnDestroy {
  currentYear = new Date().getFullYear();

  constructor(private breakpointObserver: BreakpointObserver) {
    super(breakpointObserver);
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
