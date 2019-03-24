import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../../model/book';
import {BookService} from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.book$ = this.bookService.findById(Number(
      this.route.snapshot.params.id));
  }

}
