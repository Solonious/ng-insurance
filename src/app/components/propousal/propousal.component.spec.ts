import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropousalComponent } from './propousal.component';

describe('PropousalComponent', () => {
  let component: PropousalComponent;
  let fixture: ComponentFixture<PropousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
