import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxaryComponent } from './luxary.component';

describe('LuxaryComponent', () => {
  let component: LuxaryComponent;
  let fixture: ComponentFixture<LuxaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuxaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
