import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncEventBus} from '../../core/async-event-bus';
import {filter, map} from 'rxjs/operators';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status$: Observable<string>;

  constructor(private router: Router) {
    this.status$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: RouterEvent) => event.url)
    );
  }

  ngOnInit() {
  }

}
