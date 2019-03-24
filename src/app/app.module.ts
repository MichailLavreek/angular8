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
import { StatusComponent } from './components/status/status.component';
import { BannerHeaderComponent } from './components/banner-header/banner-header.component';
import { BestBuyComponent } from './components/best-buy/best-buy.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    BookRegistrationComponent,
    FontStyleDirective,
    BookDetailsComponent,
    TestComponent,
    StatusComponent,
    BannerHeaderComponent,
    BestBuyComponent,
    DiscountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BestBuyComponent, DiscountsComponent, BookRegistrationComponent]
})
export class AppModule {
}
