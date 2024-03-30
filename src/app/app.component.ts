import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/business/header/header.component';
import { FooterComponent } from './components/business/footer/footer.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusinessComponent } from './pages/business/business.component';
import { IndividualComponent } from './pages/individual/individual.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,BusinessComponent,IndividualComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wenpay';
  valueFromHeader=0;
  onValueChange(value:number){
    this.valueFromHeader = value;
  }

}
