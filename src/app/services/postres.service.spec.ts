import { TestBed } from '@angular/core/testing';

import { PostresService } from './postres.service';

describe('PostresService', () => {
  let service: PostresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
