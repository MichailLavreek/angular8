import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncEventBus} from '../../core/async-event-bus';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status$: Observable<string>;

  constructor(private asyncEventBus: AsyncEventBus) {
    this.status$ = this.asyncEventBus.subject.pipe(
      map(event => event.message));
  }

  ngOnInit() {
  }

}
