import { async, TestBed } from '@angular/core/testing';
import { DataAccessAdjournmentsModule } from './data-access-adjournments.module';

describe('DataAccessAdjournmentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessAdjournmentsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessAdjournmentsModule).toBeDefined();
  });
});
