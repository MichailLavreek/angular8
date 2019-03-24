import {Action} from '@ngrx/store';
import {Book} from '../../model/book';

export enum OrderActionTypes {
  AddBook = '[Order] Add book',
  RemoveBook = '[Order] Remove book',
  ClearSelection = '[Order] Clear selection',
  ConfirmOrder = '[Order] Confirm order',
  OrderSent = '[Order] Order sent',
  OrderFailed = '[Order] Order failed'
}

export class AddBookAction implements Action {
  readonly type = OrderActionTypes.AddBook;

  constructor(public payload: Book) {
  }
}

export class RemoveBookAction implements Action {
  readonly type = OrderActionTypes.RemoveBook;

  constructor(public payload: number) {
  }
}

export class ClearSelectionAction implements Action {
  readonly type = OrderActionTypes.ClearSelection;
}

export class ConfirmOrderAction implements Action {
  readonly type = OrderActionTypes.ConfirmOrder;

  constructor(public payload: ReadonlyArray<Book>) {
  }
}

export class OrderSentAction implements Action {
  readonly type = OrderActionTypes.OrderSent;

  constructor(public payload: number) {
  }
}

export class OrderFailedAction implements Action {
  readonly type = OrderActionTypes.OrderFailed;

  constructor(public payload: string) {
  }
}

export type OrderActionTypeUnion = AddBookAction |
  RemoveBookAction | ClearSelectionAction | ConfirmOrderAction
  | OrderSentAction | OrderFailedAction;
