import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-block',
  templateUrl: './block.page.html',
  styleUrls: ['./block.page.scss'],
})
export class BlockPage implements OnInit {

  listLogic = [
    {
      type: 'IF',
      conds: [],
      actions: []
    },
    {
      type: 'ELSE',
      conds: [],
      actions: []
    }];
  listCustom = [];
  listTrash = [];

  listSensor = [
    {
      sensor: 'motionD',
      name: 'Motion Detector'
    },
    {
      sensor: 'tempHumi',
      name: 'Temperature'
    },
    {
      sensor: 'tempHumi',
      name: 'Humidity'
    }
  ];
  listOutput = [
    {
      name: 'LED'
    },
    {
      name: 'Sound'
    }
  ];

  constructor() {}

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      if (event.previousIndex === 0) {
        this.createNew('I');
      } else {
        this.createNew('E');
      }
    }
  }

  dropDead(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      this.listTrash.pop();
    }
  }

  add(item, i) {
    console.log(item);
    if (i === 0) {
      item.conds.push({});
    } else {
      item.actions.push({});
    }
  }

  createNew(logic) {
    if (logic === 'I') {
      this.listLogic[0] = {type: 'IF', conds: [], actions: []};
    } else {
      this.listLogic[1] = {type: 'ELSE', conds: [], actions: []};
    }
  }

  addSen(ev, item) {
    const idx = this.listSensor.findIndex(x => x.name === ev.target.value);
    if (idx !== -1) {
      item.sensor = this.listSensor[idx].sensor;
      item.name = this.listSensor[idx].name;
      item.range = [null, null];
    }
    console.log('Sensor added');
  }

  addOut(ev, item) {
    const idx = this.listOutput.findIndex(x => x.name === ev.target.value);
    if (idx !== -1) {
      item.name = this.listOutput[idx].name;
      item.input = [null, null];
    }
    console.log('Output added');
    console.log(item.name);
    console.log(this.listCustom);
  }

  setRange(ev, item, i) {
    item.range[i] = ev.target.value;
    console.log(item);
  }

  ngOnInit() {
  }

}
