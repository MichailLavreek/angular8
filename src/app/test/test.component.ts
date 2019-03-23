import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, Observer, range} from 'rxjs';
import {filter, map} from 'rxjs/operators';

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
    // range(0, 100000).pipe(filter(i => this.isPrimeNumber(i)))
    //   .subscribe(res => console.log(res + ' is prime number'));
    const observable$ = new Observable((observer: Observer<number>) => {
      console.log('Current subscriber status is ' + observer.closed);
      for (let i = 0; !observer.closed; i++) {
        if (this.isPrimeNumber(i)) {
          observer.next(i);
        }
      }
      // observer.next(1);
      // observer.complete();
    });
    range('a'.charCodeAt(0), 26).pipe(map(i => String.fromCharCode(i)))
      .subscribe(res => console.log(res));
  }

  isPrimeNumber(value: number): boolean {
    // TODO stub
    return false;
  }

  update() {
    this.label = 'Hello, IT-Discovery';
    // this.renderer.setProperty(this.myElement.nativeElement, 'textContent', this.label);
    // this.myElement.nativeElement.textContent = this.label;
  }
}
