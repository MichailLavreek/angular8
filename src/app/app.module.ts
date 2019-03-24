import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookRegistrationComponent} from './books/components/book-registration/book-registration.component';
import {TestComponent} from './test/test.component';
import {StatusComponent} from './components/status/status.component';
import {BannerHeaderComponent} from './banner/components/banner-header/banner-header.component';
import {BestBuyComponent} from './banner/components/best-buy/best-buy.component';
import {DiscountsComponent} from './banner/components/discounts/discounts.component';
import {BooksModule} from './books/books.module';
import {BannerModule} from './banner/banner.module';
import {AppRoutingModule} from './app-routing.module';
import {NewsModule} from './news/news.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StatusComponent,
    BannerHeaderComponent,
    BestBuyComponent,
    DiscountsComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    BannerModule,
    NewsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BestBuyComponent, DiscountsComponent, BookRegistrationComponent]
})
export class AppModule {
}
