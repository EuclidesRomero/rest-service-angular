import { TestBed } from '@angular/core/testing';

import { ServiceAlbumService } from './service-album.service';

describe('ServiceAlbumService', () => {
  let service: ServiceAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
