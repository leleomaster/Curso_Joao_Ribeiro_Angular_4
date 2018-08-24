import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoElementoDomViewchildComponent } from './acesso-elemento-dom-viewchild.component';

describe('AcessoElementoDomViewchildComponent', () => {
  let component: AcessoElementoDomViewchildComponent;
  let fixture: ComponentFixture<AcessoElementoDomViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoElementoDomViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoElementoDomViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
