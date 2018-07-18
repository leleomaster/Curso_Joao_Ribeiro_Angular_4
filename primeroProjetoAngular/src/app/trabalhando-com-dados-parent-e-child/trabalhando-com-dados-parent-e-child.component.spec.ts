import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhandoComDadosParentEChildComponent } from './trabalhando-com-dados-parent-e-child.component';

describe('TrabalhandoComDadosParentEChildComponent', () => {
  let component: TrabalhandoComDadosParentEChildComponent;
  let fixture: ComponentFixture<TrabalhandoComDadosParentEChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabalhandoComDadosParentEChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabalhandoComDadosParentEChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
