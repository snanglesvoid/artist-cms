import { TestBed } from '@angular/core/testing';

import { ModalImagesService } from './modal-images.service';

describe('ModalImagesService', () => {
  let service: ModalImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
