import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CascoComponent } from './casco.component';

describe('CascoComponent', () => {
  let component: CascoComponent;
  let fixture: ComponentFixture<CascoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CascoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CascoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
