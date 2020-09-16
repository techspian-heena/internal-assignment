import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { MusicService } from './music.service';
import { environment } from 'src/environments/environment';

const mockMusic = [
  {
    id: 1,
    title: 'Emptyness',
    category: 'English',
    description: 'Gajendra Verma sound recordist from mumbai.'
  },
  {
    id: 2,
    title: 'Swadesh',
    category: 'Patriotic',
    description: 'Hindi indian music by A.R. Rahman'
  }
];

const musicObj = {
  id: 3,
  title: 'Emptyness',
  category: 'Englsh',
  description: 'Gajendra Verma sound recordist from mumbai.'
};

describe('MusicService', () => {

  let service: MusicService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MusicService
      ]
    });
  });

  beforeEach(
    inject([MusicService, HttpTestingController], (serviceMock, http) => {
      service = serviceMock;
      httpMock = http;
    }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllMusic: should return a music list', () => {
    service.getAllMusic().subscribe(music => {
      expect(music.length).toBe(2);
      expect(music[0].category).toBe('English');
    });

    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndPoint}/musicList`));
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(mockMusic);
    httpMock.verify();
  });

  it('addMusic: should Add music', () => {
    const requestBody = { title: 'Emptyness' };
    service.addMusic(requestBody).subscribe((music) => {
      expect(music[0].category).toEqual('Englsh');
    });
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndPoint}/musicList`));
    expect(mockReq.request.method).toEqual('POST');
    mockReq.flush(musicObj);
    httpMock.verify();
  });

  it('updateMusic: should update music', () => {
    const spy = jest.fn();
    const requestBody = { id: 3, title: 'Emptyness' };
    service.updateMusic(requestBody).subscribe((music) => {
      expect(music.category).toEqual('Englsh');
    });
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndPoint}/musicList/${requestBody.id}`));
    expect(mockReq.request.method).toEqual('PUT');
    mockReq.flush(musicObj);
    httpMock.verify();
  });

  it('deleteMusic: should delete music', () => {
    const spy = jest.fn();
    const requestBody = { id: 3, title: 'Emptyness' };
    service.deleteMusic(requestBody.id).subscribe((music) => {
      expect({}).toEqual({});
    });
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndPoint}/musicList/${requestBody.id}`));
    expect(mockReq.request.method).toEqual('DELETE');
    mockReq.flush(musicObj);
    httpMock.verify();
  });
});
