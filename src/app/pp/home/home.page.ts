import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {MdPage} from '../pop/md/md.page';
import {ThPage} from '../pop/th/th.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  value = 0;

  constructor(private popoverController: PopoverController) { }

  async openPopoverMd(ev: Event) {
    const popover = await this.popoverController.create({
        component: MdPage,
        componentProps: {
            custom_id: this.value
        },
        event: ev
    });
    popover.present();
  }

  async openPopoverTh(ev: Event) {
     const popover = await this.popoverController.create({
         component: ThPage,
         event: ev
     });
     popover.present();
  }

  ngOnInit() {
  }

}
