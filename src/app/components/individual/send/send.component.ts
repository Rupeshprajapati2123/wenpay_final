import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss'
})
export class SendComponent {


}
