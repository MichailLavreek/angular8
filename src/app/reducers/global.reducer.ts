import {Action} from '@ngrx/store';
import {orderInitialState, OrderState} from '../books/reducers/order.reducer';


export interface GlobalState {
  order: OrderState;

}

export const initialState: GlobalState = {
  order: orderInitialState
};

export function reducer(state = initialState, action: Action): GlobalState {
  switch (action.type) {

    default:
      return state;
  }
}
