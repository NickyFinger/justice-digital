import { async, TestBed } from '@angular/core/testing';
import { DataAccessFilingModule } from './data-access-filing.module';

describe('DataAccessFilingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessFilingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessFilingModule).toBeDefined();
  });
});
