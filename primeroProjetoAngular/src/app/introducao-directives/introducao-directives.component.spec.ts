import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducaoDirectivesComponent } from './introducao-directives.component';

describe('IntroducaoDirectivesComponent', () => {
  let component: IntroducaoDirectivesComponent;
  let fixture: ComponentFixture<IntroducaoDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducaoDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducaoDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
