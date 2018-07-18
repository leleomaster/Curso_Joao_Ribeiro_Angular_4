import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhandoComModelComponent } from './trabalhando-com-model.component';

describe('TrabalhandoComModelComponent', () => {
  let component: TrabalhandoComModelComponent;
  let fixture: ComponentFixture<TrabalhandoComModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhandoComModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhandoComModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
