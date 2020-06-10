import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkategoriaComponent } from './addkategoria.component';

describe('AddkategoriaComponent', () => {
  let component: AddkategoriaComponent;
  let fixture: ComponentFixture<AddkategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
