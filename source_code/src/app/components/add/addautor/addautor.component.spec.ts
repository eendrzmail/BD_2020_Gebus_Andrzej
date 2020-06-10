import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddautorComponent } from './addautor.component';

describe('AddautorComponent', () => {
  let component: AddautorComponent;
  let fixture: ComponentFixture<AddautorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddautorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
