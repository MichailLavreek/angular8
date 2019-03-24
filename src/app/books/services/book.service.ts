import {Injectable} from '@angular/core';
import {Book} from '../../model/book';
import {EMPTY, Observable, throwError} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];

  orderId = 1;

  constructor() {
    this.books = [
      {
        id: 1,
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s\n' +
          '      more reliable, readable, and maintainable',
        pages: 2008,
        year: 172,
        price: 100,
      },
      {
        id: 2,
        title: 'Mastering TypeScript',
        author: 'Nathan Rozentals',
        description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading\n' +
          '      JavaScript frameworks',
        pages: 2015,
        year: 364,
        price: 150
      },
      {
        id: 3,
        title: 'Switching to Angular 2',
        author: 'Minko Gechev',
        description: 'Start using TypeScript to supercharge your Angular 2 applications',
        pages: 2016,
        year: 254,
        price: 250
      }
    ];
  }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  save(book: Book): void {
    this.books.push(book);
  }

  findById(id: number): Observable<Book> {
    for (const book of this.books) {
      if (book.id === id) {
        return of(book);
      }
    }
    return EMPTY;
  }

  bookExists(title: string): Observable<boolean> {
    return of(this.books.map(book => book.title)
      .indexOf(title) >= 0);
  }

  makeOrder(books: ReadonlyArray<Book>): Observable<number> {
    if (!books || books.length > 5) {
      return throwError('Order size is incorrect');
    }
    return of(this.orderId++);
  }
}
