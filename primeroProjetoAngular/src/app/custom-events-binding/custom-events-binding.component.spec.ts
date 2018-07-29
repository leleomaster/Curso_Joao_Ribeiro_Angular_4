import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEventsBindingComponent } from './custom-events-binding.component';

describe('CustomEventsBindingComponent', () => {
  let component: CustomEventsBindingComponent;
  let fixture: ComponentFixture<CustomEventsBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEventsBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEventsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
