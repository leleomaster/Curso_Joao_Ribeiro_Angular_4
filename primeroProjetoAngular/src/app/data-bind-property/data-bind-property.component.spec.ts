import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindPropertyComponent } from './data-bind-property.component';

describe('DataBindPropertyComponent', () => {
  let component: DataBindPropertyComponent;
  let fixture: ComponentFixture<DataBindPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
