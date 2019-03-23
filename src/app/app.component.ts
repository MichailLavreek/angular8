import {Component} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$: Observable<Book[]>;
  booksNumber: number;

  constructor(private bookService: BookService) {
    this.books$ = bookService.getBooks();
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }
}
