import {Component, OnInit} from '@angular/core';
import {Book} from '../../../model/book';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GlobalState} from '../../../reducers/global.reducer';
import {selectBooksSelection} from '../../reducers/order.reducer';
import {ConfirmOrderAction} from '../../actions/order.actions';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  books$: Observable<ReadonlyArray<Book>>;

  constructor(private store: Store<GlobalState>) {
    this.books$ = this.store.pipe(
      select(selectBooksSelection)
    );
  }

  ngOnInit() {
  }

  confirm() {
    this.store.pipe(
      select(selectBooksSelection), take(1)
    ).subscribe(books => this.store.dispatch(
      new ConfirmOrderAction(books)));
  }
}
