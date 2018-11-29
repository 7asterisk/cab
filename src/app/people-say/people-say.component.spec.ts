import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSayComponent } from './people-say.component';

describe('PeopleSayComponent', () => {
  let component: PeopleSayComponent;
  let fixture: ComponentFixture<PeopleSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
