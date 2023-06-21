/**
 * DropDownList Template Sample
 */
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  // define the JSON of data
  customers = [
    { id: 1, name: 'Adam', data: 'sdfdf' },
    { id: 2, name: 'Jack', data: 'sdfdf' },
    { id: 3, name: 'Katherin', data: 'sdfdf' },
    { id: 4, name: 'John', data: 'sdfdf' },
    { id: 5, name: 'Watson', data: 'sdfdf' },
    { id: 6, name: '3omar', data: 'sdfdf' },
    { id: 7, name: 'Watson', data: 'sdfdf' },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.customers = [
        { id: 1, name: 'Adam', data: 'sdfdf' },
        { id: 2, name: 'Jack', data: 'sdfdf' },

        { id: 6, name: 'Watson', data: 'sdfdf' },
        { id: 7, name: '3omar', data: 'sdfdf' },
        { id: 3, name: 'Katherin', data: 'sdfdf' },
        { id: 4, name: 'John', data: 'sdfdf' },
        { id: 5, name: 'Watson', data: 'sdfdf' },
      ];
    }, 3000);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.customers, event.previousIndex, event.currentIndex);
    console.log(this.customers);
  }

  add() {
    this.customers.push({
      id: this.customers.length + 1,
      name: '',
      data: '',
    });
    console.log(this.customers);
  }

  remove(id) {
    this.customers.splice(id, 1);
    console.log(this.customers);
  }

  trackById(index: number, customer: any): number {
    return customer.id;
  }
}
