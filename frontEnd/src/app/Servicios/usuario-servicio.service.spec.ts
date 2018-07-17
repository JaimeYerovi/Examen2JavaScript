import { TestBed, inject } from '@angular/core/testing';

import { UsuarioServicioService } from './usuario-servicio.service';

describe('UsuarioServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioServicioService]
    });
  });

  it('should be created', inject([UsuarioServicioService], (service: UsuarioServicioService) => {
    expect(service).toBeTruthy();
  }));
});
