import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsuranceComponent } from './ensurance.component';

describe('EnsuranceComponent', () => {
  let component: EnsuranceComponent;
  let fixture: ComponentFixture<EnsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
