import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../model/book';
import {OrderState} from '../../reducers/order.reducer';
import {Store} from '@ngrx/store';
import {AddBookAction} from '../../actions/order.actions';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;

  constructor(private store: Store<OrderState>) {
  }

  ngOnInit() {
  }

  formatYear(year: number): string {
    return year + ' year';
  }

  addToOrder() {
    this.store.dispatch(new AddBookAction(this.book));
  }
}
