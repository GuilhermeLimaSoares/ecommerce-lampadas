import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBuyComponent } from './icon-buy.component';

describe('IconBuyComponent', () => {
  let component: IconBuyComponent;
  let fixture: ComponentFixture<IconBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
