import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'jumper',
        loadChildren: '../jumper/jumper.module#JumperPageModule'
      },
      {
        path: 'and-or',
        loadChildren: '../and-or/and-or.module#AndOrPageModule'
      },
      {
        path: 'interrupt',
        loadChildren: '../interrupt/interrupt.module#InterruptPageModule'
      },
      {
        path: 'block',
        loadChildren: '../block/block.module#BlockPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
