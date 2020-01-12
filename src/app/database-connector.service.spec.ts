import { TestBed } from '@angular/core/testing';

import { DatabaseConnectorService } from './database-connector.service';

describe('DatabaseConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseConnectorService = TestBed.get(DatabaseConnectorService);
    expect(service).toBeTruthy();
  });
});
