import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private _youSendValue: number = 0;

  get youSendValue(): number {
    return this._youSendValue;
  }

  set youSendValue(value: number) {
    this._youSendValue = value;
    this.updateReceiverGetsValue();
    this.updateServiceFee();
    this.updateTotalPay();
  }

  receiverGetsValue: number = 0;
  serviceFeeFactor: number = 0.02;
  serviceFeeValue: number = 0;
  totalPayValue: number = 0;

  updateReceiverGetsValue() {
    this.receiverGetsValue = this._youSendValue / 1.234;
  }

  updateServiceFee() {
    this.serviceFeeValue = this._youSendValue * this.serviceFeeFactor;
  }

  updateTotalPay() {
    this.totalPayValue = this._youSendValue*10 + this.serviceFeeValue*10 ;
    this.totalPayValue/=10;
  }
}
