import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() valueChange = new EventEmitter<number>();
  value = 0;
  isMobileNavOpen = false;

  handleChange() {
    this.value = 0;
    this.valueChange.emit(this.value);
    console.log(this.value);
  }

  handlesecondchange() {
    this.value = 1;
    this.valueChange.emit(this.value);
    console.log(this.value);
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
}