import {Component} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';
import {Observable} from 'rxjs';
import {AsyncEventBus} from './services/async-event-bus';
import {ApplicationEvent} from './services/application-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$: Observable<Book[]>;
  booksNumber: number;

  constructor(private bookService: BookService, private asyncEventBus: AsyncEventBus) {
    this.books$ = bookService.getBooks();
    this.books$.subscribe(res => this.asyncEventBus
      .sendEvent(new ApplicationEvent('Loading books ...', 'AppComponent')));
  }

  isJavaScript(book: Book): boolean {
    return book.title.indexOf('JavaScript') >= 0;
  }
}
