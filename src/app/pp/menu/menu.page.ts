import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Jumper Project',
      url: '/menu/jumper',
      icon: 'redo'
    },
    {
      title: 'And/Or Project',
      url: '/menu/and-or',
      icon: 'card'
    },
    {
      title: 'Interrupt Project',
      url: '/menu/interrupt',
      icon: 'switch'
    },
    {
      title: 'Block Project',
      url: '/menu/block',
      icon: 'cube'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
