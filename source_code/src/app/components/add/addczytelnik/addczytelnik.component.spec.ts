import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddczytelnikComponent } from './addczytelnik.component';

describe('AddczytelnikComponent', () => {
  let component: AddczytelnikComponent;
  let fixture: ComponentFixture<AddczytelnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddczytelnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddczytelnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
