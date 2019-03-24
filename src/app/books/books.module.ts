import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookRegistrationComponent} from './components/book-registration/book-registration.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {BooksComponent} from './components/books/books.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from '../core/core.module';
import { BookComponent } from './components/book/book.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [BookRegistrationComponent, BookDetailsComponent, BooksComponent, BookComponent, OrderComponent],
  exports: [BooksComponent, BookComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule
  ]
})
export class BooksModule { }
