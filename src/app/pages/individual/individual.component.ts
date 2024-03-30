import { Component } from '@angular/core';
import { TrynowComponent } from '../../components/individual/trynow/trynow.component';
import { MapComponent } from '../../components/individual/map/map.component';
import { ChooseusComponent } from '../../components/individual/chooseus/chooseus.component';
import { SendComponent } from '../../components/individual/send/send.component';

@Component({
  selector: 'app-individual',
  standalone: true,
  imports: [TrynowComponent,MapComponent,ChooseusComponent,SendComponent],
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss'
})
export class IndividualComponent {

}
