import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<div id="my_div">{{label}}</div><button (click)="update()">Update</button>',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  label: string;

  constructor() {
  }

  ngOnInit() {
  }

  update() {
    this.label = 'Hello, IT-Discovery';
  }
}
