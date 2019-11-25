import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-th',
  templateUrl: './th.page.html',
  styleUrls: ['./th.page.scss'],
})
export class ThPage implements OnInit {

  minInputTem: any = 0;
  maxInputTem: any = 0;
  temInput: any;
  minInputHum: any = 0;
  maxInputHum: any = 0;
  humInput: any;
  temCheck: any = 'checked';
  humCheck: any = 'checked';

  constructor(private popoverController: PopoverController) {
  }

  ngOnInit() {
  }

  closePopover() {
    this.popoverController.dismiss();
  }

  setTemBadge(temInput) {
    this.minInputTem = temInput.lower;
    this.maxInputTem = temInput.upper;
  }

  setHumBadge(humInput) {
    this.minInputHum = humInput.lower;
    this.maxInputHum = humInput.upper;
  }

}
