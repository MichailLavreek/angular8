import {Book} from '../../model/book';

export interface OrderState {
  readonly books: ReadonlyArray<Book>;
  readonly confirmed: boolean;
}

export const initialState: OrderState = {
  books: [],
  confirmed: false
};

export function orderReducer(state = initialState, action: any): OrderState {
  switch (action.type) {
    case 'addBook': {
      return {
        books: [...state.books, action.payload],
        confirmed: false
      };
    }
    case 'removeBook': {
      return {
        books: state.books.filter(book => book.id !== action.payload),
        confirmed: false
      };
    }
    case 'clear': {
      return {
        books: [],
        confirmed: false
      };
    }
    case 'confirm': {
      return {
        ...state,
        confirmed: true
      };
    }
    default:
      return state;
  }
}
