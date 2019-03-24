import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appFontStyle]'
})
export class FontStyleDirective {
  @HostBinding('style.font-weight')
  @Input() fontWeight = 'bold';

}
