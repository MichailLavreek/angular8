import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../../model/book';
import {BookService} from '../../services/book.service';
import {AsyncEventBus} from '../../../services/async-event-bus';
import {MatDialog} from '@angular/material';
import {ApplicationEvent} from '../../../services/application-event';
import {BookRegistrationComponent} from '../book-registration/book-registration.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>;
  booksNumber: number;

  constructor(private bookService: BookService, private asyncEventBus: AsyncEventBus,
              private matDialog: MatDialog) {
    this.books$ = bookService.getBooks();
    this.books$.subscribe(res => this.asyncEventBus
      .sendEvent(new ApplicationEvent('Loading books ...', 'AppComponent')));
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }

  openBookDialog() {
    const dialogRef = this.matDialog.open(BookRegistrationComponent,
      {
        autoFocus: false
      });
    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.bookService.save(dialogRef.componentInstance.book);
        }
      });
  }

  ngOnInit(): void {
  }
}
