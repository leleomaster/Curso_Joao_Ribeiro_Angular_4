import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtitlizandoDiretivaNgContentComponent } from './utitlizando-diretiva-ng-content.component';

describe('UtitlizandoDiretivaNgContentComponent', () => {
  let component: UtitlizandoDiretivaNgContentComponent;
  let fixture: ComponentFixture<UtitlizandoDiretivaNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtitlizandoDiretivaNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtitlizandoDiretivaNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
