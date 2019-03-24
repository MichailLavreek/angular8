import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontStyleDirective} from './font-style.directive';
import {QuotePipe} from './quote.pipe';

@NgModule({
  declarations: [FontStyleDirective, QuotePipe],
  exports: [FontStyleDirective, QuotePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
