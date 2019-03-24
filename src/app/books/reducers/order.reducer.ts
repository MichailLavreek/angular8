import {Book} from '../../model/book';
import {OrderActionTypes, OrderActionTypeUnion} from '../actions/order.actions';

export interface OrderState {
  readonly books: ReadonlyArray<Book>;
  readonly confirmed: boolean;
}

export const orderInitialState: OrderState = {
  books: [],
  confirmed: false
};

export function orderReducer(state = orderInitialState, action: OrderActionTypeUnion):
  OrderState {
  switch (action.type) {
    case OrderActionTypes.AddBook: {
      return {
        books: [...state.books, action.payload],
        confirmed: false
      };
    }
    case OrderActionTypes.RemoveBook: {
      return {
        books: state.books.filter(book => book.id !== action.payload),
        confirmed: false
      };
    }
    case OrderActionTypes.ClearSelection: {
      return {
        books: [],
        confirmed: false
      };
    }
    case OrderActionTypes.ConfirmOrder: {
      return {
        ...state,
        confirmed: true
      };
    }
    default:
      return state;
  }
}
