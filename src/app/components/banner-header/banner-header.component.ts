import {Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {BestBuyComponent} from '../best-buy/best-buy.component';
import {DiscountsComponent} from '../discounts/discounts.component';
import {interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-banner-header',
  template: '<ng-template #parent></ng-template>',
  styleUrls: ['./banner-header.component.css']
})
export class BannerHeaderComponent implements OnInit {

  @ViewChild('parent', {read: ViewContainerRef})
  private parent: ViewContainerRef;

  private components: any[] = [DiscountsComponent, BestBuyComponent];

  constructor(private componentFactoryResolver:
                ComponentFactoryResolver) {
  }

  ngOnInit() {
    interval(1000).pipe(map(i =>
      Math.floor(Math.random() * 10) % 2),
      map(i => this.components[i]))
      .subscribe(res => this.displayComponent(res));
  }

  private displayComponent(comp): void {
    this.parent.clear();
    const component =
      this.componentFactoryResolver.resolveComponentFactory(comp);
    this.parent.createComponent(component);
  }

}
