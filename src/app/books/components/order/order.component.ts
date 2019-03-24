import {Component, OnInit} from '@angular/core';
import {Book} from '../../../model/book';
import {OrderState} from '../../reducers/order.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private store: Store<OrderState>) {
  }

  ngOnInit() {
  }

  confirm() {

  }
}
