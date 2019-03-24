import {Book} from '../../model/book';
import {OrderActionTypes, OrderActionTypeUnion} from '../actions/order.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface OrderState {
  readonly books: ReadonlyArray<Book>;
  readonly confirmed: boolean;
  readonly orderId: number | null;
  readonly error: string | null;
}

export const orderInitialState: OrderState = {
  books: [],
  confirmed: false,
  orderId: null,
  error: null
};

export function orderReducer(state = orderInitialState, action: OrderActionTypeUnion):
  OrderState {
  switch (action.type) {
    case OrderActionTypes.AddBook: {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    }
    case OrderActionTypes.RemoveBook: {
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload),
      };
    }
    case OrderActionTypes.ClearSelection: {
      return {
        ...state,
        books: [],
      };
    }
    case OrderActionTypes.OrderSent: {
      return {
        ...state,
        orderId: action.payload,
        confirmed: true
      };
    }
    case OrderActionTypes.OrderFailed: {
      return {
        ...state,
        confirmed: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}

export const selectOrderState = createFeatureSelector('order');

export const selectBooks = (state: OrderState) => state.books;

export const selectBooksSelection = createSelector(selectOrderState,
  selectBooks);
