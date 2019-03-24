import {Injectable} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
import {ApplicationEvent} from './application-event';

@Injectable({providedIn: 'root'})
export class AsyncEventBus {
  private _subject$ = new Subject<ApplicationEvent>();

  sendEvent(event: ApplicationEvent): void {
    this._subject$.next(event);
  }

  get subject(): Observable<ApplicationEvent> {
    return this._subject$;
  }
}
