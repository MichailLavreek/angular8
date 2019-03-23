import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuotePipe} from './quote.pipe';
import {BookRegistrationComponent} from './book-registration/book-registration.component';
import {FontStyleDirective} from './font-style.directive';
import {BookDetailsComponent} from './book-details/book-details.component';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    BookRegistrationComponent,
    FontStyleDirective,
    BookDetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
