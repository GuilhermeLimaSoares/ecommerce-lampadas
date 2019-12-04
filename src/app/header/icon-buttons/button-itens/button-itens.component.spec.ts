import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonItensComponent } from './button-itens.component';

describe('ButtonItensComponent', () => {
  let component: ButtonItensComponent;
  let fixture: ComponentFixture<ButtonItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
