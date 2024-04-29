import { Component, OnDestroy, afterNextRender, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent implements OnDestroy {
  slidePaths: string[];
  currentSlide: number;
  slideCount: number;
  intervalId = 0;

  constructor(private ngZone: NgZone) {
    this.slidePaths = [
      'background.jpg',
      'background2.jpg',
      'background3.jpg',
      'placeholder.jpg',
    ];
    this.slideCount = this.slidePaths.length;
    this.currentSlide = 1;

    afterNextRender(() => {
      this.ngZone.run(() => {
        this.intervalId = window.setInterval(() => {
          this.nextSlide(1);
        }, 5000);
      });
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(pace: number) {
    this.currentSlide = (this.currentSlide + pace) % this.slideCount;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slideCount - 1;
    }
  }

  changeCurrentSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }
}
