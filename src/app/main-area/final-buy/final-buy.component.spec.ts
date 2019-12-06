import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBuyComponent } from './final-buy.component';

describe('FinalBuyComponent', () => {
  let component: FinalBuyComponent;
  let fixture: ComponentFixture<FinalBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
