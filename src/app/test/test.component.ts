import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, Observer, range} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-test',
  template: '<div id="my_div"></div><button (click)="update()">Update</button>',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  label: string;

  // @ViewChild('myElement')
  // myElement: ElementRef;

  constructor(private myElement: ElementRef) {
  }

  ngOnInit() {
    // const observable$ = new Observable((observer: Observer<number>) => {
    //   observer.next(1);
    //   observer.complete();
    // });
    range('a'.charCodeAt(0), 26).pipe(map(i => String.fromCharCode(i)))
      .subscribe(res => console.log(res));
  }

  update() {
    this.label = 'Hello, IT-Discovery';
    // this.renderer.setProperty(this.myElement.nativeElement, 'textContent', this.label);
    // this.myElement.nativeElement.textContent = this.label;
  }
}
