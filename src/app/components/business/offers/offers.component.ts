import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
arr=[
  {"name":"Spped & Affordability","desc":"Lowest rates on payout transactions so you can pay faster, cheaper. This is how we are making international payments work for you.","img":"../../../../assets/images/first.png"},
  {"name":"Multi-Currency Spend","desc":"Streamline Currency Exchange and Seamless Transactions on a Unified Platform, with Expanding Currency Options for Global Payments.","img":"../../../../assets/images/second.png"},
  {"name":"Incredible Security","desc":"The robust fraud monitoring tools and airtight encryption on our platform means one thing: your account is protected from unauthorized access and your exposure to fraud is minimal.","img":"../../../../assets/images/third.png"},
  {"name":"Confidentiality","desc":"The only one who should have absolute control over your information is you. This is what we believe and that is why we have designed our services to protect your privacy and your ideas.","img":"../../../../assets/images/fourth.png"}
];
}
