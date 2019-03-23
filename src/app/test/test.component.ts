import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<div id="my_div"></div><button (click)="update()">Update</button>',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  label: string;

  // @ViewChild('myElement')
  // myElement: ElementRef;

  constructor(private myElement: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  update() {
    this.label = 'Hello, IT-Discovery';
    this.renderer.setProperty(this.myElement.nativeElement, 'textContent', this.label);
    // this.myElement.nativeElement.textContent = this.label;
  }
}
