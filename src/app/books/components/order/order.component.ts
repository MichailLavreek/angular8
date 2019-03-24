import {Component, OnInit} from '@angular/core';
import {Book} from '../../../model/book';
import {OrderState} from '../../reducers/order.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GlobalState} from '../../../reducers/global.reducer';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  books$: Observable<ReadonlyArray<Book>>;

  constructor(private store: Store<GlobalState>) {
    this.books$ = this.store.pipe(
       map(state => state.order.books)
    );
  }

  ngOnInit() {
  }

  confirm() {

  }
}
