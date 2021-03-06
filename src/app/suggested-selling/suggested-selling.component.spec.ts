import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedSellingComponent } from './suggested-selling.component';

describe('SuggestedSellingComponent', () => {
  let component: SuggestedSellingComponent;
  let fixture: ComponentFixture<SuggestedSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
