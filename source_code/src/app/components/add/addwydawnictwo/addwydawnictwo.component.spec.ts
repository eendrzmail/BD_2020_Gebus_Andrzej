import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwydawnictwoComponent } from './addwydawnictwo.component';

describe('AddwydawnictwoComponent', () => {
  let component: AddwydawnictwoComponent;
  let fixture: ComponentFixture<AddwydawnictwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwydawnictwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwydawnictwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
