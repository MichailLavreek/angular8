import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bookService: BookService,
              formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required,
        Validators.minLength(5)]),
      description: formBuilder.control('', [Validators.required]),
      author: formBuilder.control('', [Validators.required]),
      pages: formBuilder.control('', [Validators.required]),
      year: formBuilder.control('', [Validators.required]),
      price: formBuilder.control('', [Validators.required])
    });

    this.bookForm.get('title').setAsyncValidators(
      this.validateUniqueBookTitle.bind(this));
  }

  ngOnInit() {
  }

  saveBook(): void {
    this.bookService.save(this.bookForm.value as Book);
    this.bookForm.reset();
  }

  isValid(name: string): boolean {
    return this.bookForm.get(name).touched && !this.bookForm.get(name).valid;
  }

  validateUniqueBookTitle(c: AbstractControl): Observable<ValidationErrors> {
    return this.bookService.bookExists(c.value)
      .pipe(map(bookExists => {
        if (!bookExists) {
          return null;
        } else {
          return {titleNotUnique: true};
        }
      }));
  }
}
