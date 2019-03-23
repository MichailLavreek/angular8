import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
}
