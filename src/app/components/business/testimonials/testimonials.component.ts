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
  activeCardIndex = 0; 

  scrollRight() {
    const imgList = document.getElementById('imgList');
    if (imgList) {
      imgList.scrollBy(600, 0);
      this.updateActiveCardIndex(1); 
    }
  }

  scrollLeft() {
    const imgList = document.getElementById('imgList');
    if (imgList) {
      imgList.scrollBy(-750, 0);
      this.updateActiveCardIndex(-1); 
    }
  }

  updateActiveCardIndex(change: number) {
    const totalCards = 5; 
    this.activeCardIndex = (this.activeCardIndex + change + totalCards) % totalCards;
  }

  isCardActive(index: number): boolean {
    return index === this.activeCardIndex;
  }
}
