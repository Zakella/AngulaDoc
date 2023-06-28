import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { crisisDetailResolverResolver } from './crisis-detail-resolver';

describe('crisisDetailResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => crisisDetailResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
