import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaComponentComponent } from './ciclo-vida-component.component';

describe('CicloVidaComponentComponent', () => {
  let component: CicloVidaComponentComponent;
  let fixture: ComponentFixture<CicloVidaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloVidaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloVidaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
