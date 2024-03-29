import { Component } from '@angular/core';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  arr=[{"id":"0"},{"id":"1"},{"id":"2"},{"id":"3"}];
  flag=0;
  scrollRight() {
    const imgList = document.getElementById('imgList');
    if (imgList) {
      imgList.scrollBy(600, 0);
    }
  }
  scrollLeft() {
    const imgList = document.getElementById('imgList');
    if (imgList) {
      imgList.scrollBy(-750, 0);
    }
  }
  
}
