import { async, TestBed } from '@angular/core/testing';
import { UiFilingModule } from './ui-filing.module';

describe('UiFilingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiFilingModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiFilingModule).toBeDefined();
  });
});
