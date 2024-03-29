import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-chooseus',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './chooseus.component.html',
  styleUrl: './chooseus.component.scss'
})
export class ChooseusComponent {
arr=[
  {"title":"Fast Payouts","img":"../../../../assets/fast.png","desc":"Lorem ipsum dolor sit amet consectetur. Iaculis et sed augue a at pharetra enim integer.","bg":"#23AFA0"},
  {"title":"Low-cost tranfer fee","img":"../../../../assets/Group.png","desc":"Lorem ipsum dolor sit amet consectetur. Iaculis et sed augue.","bg":"#EBB3FF"},
  {"title":"Domiciliary Account Deposits","img":"../../../../assets/wallets.png","desc":"Lorem ipsum dolor sit amet consectetur. Iaculis et.","bg":"#FFB2A0"},
  {"title":"Multicurrency Payouts","img":"../../../../assets/currency.png","desc":"Lorem ipsum dolor sit amet consectetur. Iaculis et.","bg":"#407BFF"},
];
}
