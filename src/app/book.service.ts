import {Injectable} from '@angular/core';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  save(book: Book): void {
    // this.books.push(book);
  }
}
