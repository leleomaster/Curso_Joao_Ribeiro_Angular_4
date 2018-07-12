import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExercicioComponent } from './data-binding-exercicio.component';

describe('DataBindingExercicioComponent', () => {
  let component: DataBindingExercicioComponent;
  let fixture: ComponentFixture<DataBindingExercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingExercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
