import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/business/header/header.component';
import { TrynowComponent } from './components/business/trynow/trynow.component';
import {  TestimonialsComponent } from './components/business/testimonials/testimonials.component';
import { FooterComponent } from './components/business/footer/footer.component';
import { CountriesComponent } from './components/business/countries/countries.component';
import { MapComponent } from './components/business/map/map.component';
import { StartedComponent } from './components/business/started/started.component';
import { OurservicesComponent } from './components/business/ourservices/ourservices.component';
import { OffersComponent } from './components/business/offers/offers.component';
import { FirmsComponent } from './components/business/firms/firms.component';
import { CarouselCardComponent } from './components/business/carousel-card/carousel-card.component';
import { HomeComponent } from './components/individual/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,HeaderComponent,HomeComponent,TrynowComponent,TestimonialsComponent, FooterComponent,CountriesComponent,MapComponent,StartedComponent,OurservicesComponent,OffersComponent,FirmsComponent,CarouselCardComponent],
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
