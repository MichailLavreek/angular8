import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {BookService} from '../services/book.service';
import {of} from 'rxjs';
import {OrderActionTypes, OrderActionTypeUnion, OrderFailedAction, OrderSentAction} from '../actions/order.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {Book} from '../../model/book';

@Injectable()
export class OrderEffects {

  @Effect()
  orderConfirmed$ = this.actions$.pipe(
    ofType(OrderActionTypes.ConfirmOrder),
    map(action => action.payload),
    exhaustMap((books: ReadonlyArray<Book>) =>
      this.bookService.makeOrder(books).pipe(
        map(orderId => new OrderSentAction(orderId)),
        catchError(err => of(new OrderFailedAction(err)))
      ))
  );

  constructor(private actions$: Actions<OrderActionTypeUnion>,
              private bookService: BookService) {
  }

}
