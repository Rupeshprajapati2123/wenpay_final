import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Output() valueChange = new EventEmitter<number>();
value=0;
handleChange(){
  this.value=0;
  this.valueChange.emit(this.value);
  console.log(this.value)
}
handlesecondchange(){
  this.value=1;
  this.valueChange.emit(this.value);
  console.log(this.value)
}
}
