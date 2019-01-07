import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegistrationAuthorComponent } from './view-registration-author.component';

describe('ViewRegistrationAuthorComponent', () => {
  let component: ViewRegistrationAuthorComponent;
  let fixture: ComponentFixture<ViewRegistrationAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegistrationAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegistrationAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
