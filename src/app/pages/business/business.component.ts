import { Component } from '@angular/core';
import { TrynowComponent } from '../../components/business/trynow/trynow.component';
import { FirmsComponent } from '../../components/business/firms/firms.component';
import { MapComponent } from '../../components/business/map/map.component';
import { CountriesComponent } from '../../components/business/countries/countries.component';
import { OffersComponent } from '../../components/business/offers/offers.component';
import { OurservicesComponent } from '../../components/business/ourservices/ourservices.component';
import { TestimonialsComponent } from '../../components/business/testimonials/testimonials.component';
import { StartedComponent } from '../../components/business/started/started.component';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [TrynowComponent, FirmsComponent,MapComponent,CountriesComponent,OffersComponent,OurservicesComponent,TestimonialsComponent,StartedComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent {

}
