import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpracownikComponent } from './addpracownik.component';

describe('AddpracownikComponent', () => {
  let component: AddpracownikComponent;
  let fixture: ComponentFixture<AddpracownikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpracownikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpracownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
