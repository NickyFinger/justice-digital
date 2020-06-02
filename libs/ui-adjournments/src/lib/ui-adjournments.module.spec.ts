import { async, TestBed } from '@angular/core/testing';
import { UiAdjournmentsModule } from './ui-adjournments.module';

describe('UiAdjournmentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdjournmentsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdjournmentsModule).toBeDefined();
  });
});
