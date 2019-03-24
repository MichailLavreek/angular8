import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestBuyComponent } from './best-buy.component';

describe('BestBuyComponent', () => {
  let component: BestBuyComponent;
  let fixture: ComponentFixture<BestBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
