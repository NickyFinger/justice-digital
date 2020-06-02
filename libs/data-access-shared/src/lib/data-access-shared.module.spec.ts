import { async, TestBed } from '@angular/core/testing';
import { DataAccessSharedModule } from './data-access-shared.module';

describe('DataAccessSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessSharedModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessSharedModule).toBeDefined();
  });
});
