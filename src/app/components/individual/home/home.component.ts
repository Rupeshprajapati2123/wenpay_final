import { Component } from '@angular/core';
import { TrynowComponent } from '../trynow/trynow.component';
import { ChooseusComponent } from '../chooseus/chooseus.component';
import { SendComponent } from '../send/send.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TrynowComponent, ChooseusComponent,MapComponent,SendComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
