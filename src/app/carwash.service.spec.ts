import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CarwashService } from './carwash.service';

describe('CarwashService', () => {
  let service: CarwashService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarwashService]
    });
    service = TestBed.inject(CarwashService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should insert a new record', () => {
    const testData = { id: '1', name: 'John' };

    service.insetarRegistro(testData).then(response => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3500/solicitud/');
    expect(req.request.method).toBe('POST');
    req.flush(testData);
  });

  it('should get pending state', () => {
    const testData = { id: '1', status: 'pending' };

    service.getEstadoPendiente().then(response => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3500/solicitud/getTabla1');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should accept a request', () => {
    const testData = { id: '1', status: 'accepted' };

    service.aceptarSolicitud('1').then(response => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3500/solicitud/aceptarRegistro');
    expect(req.request.method).toBe('POST');
    req.flush(testData);
  });

  it('should reject a request', () => {
    const testData = { id: '1', status: 'rejected' };

    service.rechazarSolicitud('1').then(response => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3500/solicitud/rechazarRegistro');
    expect(req.request.method).toBe('POST');
    req.flush(testData);
  });

  it('should update a request', () => {
    const testData = { id: '1', status: 'updated' };
    const updatedData = { name: 'Updated Name' };

    service.actualizarSolicitud('1', updatedData).then(response => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3500/solicitud/actualizarRegistro');
    expect(req.request.method).toBe('POST');
    req.flush(testData);
  });

});
