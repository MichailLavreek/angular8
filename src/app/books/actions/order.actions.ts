import {Action} from '@ngrx/store';
import {Book} from '../../model/book';

export enum OrderActionTypes {
  AddBook = '[Order] Add book',
  RemoveBook = '[Order] Add book',
  ClearSelection = '[Order] Clear selection',
  ConfirmOrder = '[Order] Confirm order'
}

export class AddBookAction implements Action {
  readonly type = OrderActionTypes.AddBook;

  constructor(public payload: Book) {
  }
}

export class RemoveBookAction implements Action {
  readonly type = OrderActionTypes.RemoveBook;

  constructor(public bookId: number) {
  }
}

export class ClearSelectionAction implements Action {
  readonly type = OrderActionTypes.ClearSelection;
}

export class ConfirmOrderAction implements Action {
  readonly type = OrderActionTypes.ConfirmOrder;
}

export type OrderActionTypeUnion = AddBookAction |
  RemoveBookAction | ClearSelectionAction | ConfirmOrderAction;
