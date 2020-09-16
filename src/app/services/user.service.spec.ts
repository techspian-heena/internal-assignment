import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { UserService } from './user.service';

const mockUser = [
  {
    id: 1,
    username: 'admin',
    password: 'zaq1ZAQ!',
    firstName: 'Heena',
    lastName: 'Verma',
    email: 'heena@techspian.com'
  },
  {
    id: 1,
    username: 'heena',
    password: 'xsw2!',
    firstName: 'Heena',
    lastName: 'Verma',
    email: 'heena@techspian.com'
  }
];

const userObj = {
  id: 1,
  username: 'heena',
  password: 'xsw2!',
  firstName: 'Heena',
  lastName: 'Verma',
  email: 'heena@techspian.com'
};

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService
      ]
    });
  });

  beforeEach(
    inject([UserService, HttpTestingController], (serviceMock, http) => {
      service = serviceMock;
      httpMock = http;
    }));


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllUser: should return a user list', () => {
    service.getAllUsers().subscribe(user => {
      expect(user.length).toBe(2);
      expect(user[0].username).toBe('admin');
    });

    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndPoint}/users`));
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(mockUser);
    httpMock.verify();
  });

  it('addUser: should Add user', () => {
    const requestBody = { username: 'heena' };
    service.addUser(requestBody).subscribe((user) => {
      expect(user[0].firstName).toEqual('Heena');
    });
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiEndPoint}/users`));
    expect(mockReq.request.method).toEqual('POST');
    mockReq.flush(userObj);
    httpMock.verify();
  });
});
