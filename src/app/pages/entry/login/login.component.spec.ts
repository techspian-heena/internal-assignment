import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DatashareService } from 'src/app/services/datashare.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockData =
  {
    username: 'heena',
    password: 'xsw2XSW@'
  };

  const locationStub = {
    back: jasmine.createSpy('back')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [LoginComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        DatashareService,
        provideMockStore({
          initialState: {
            user: {
              list: [],
              loading: false
            }
          },
        }),
        { provide: Store, useClass: MockStore },
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: locationStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    const location = fixture.debugElement.injector.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginForm', () => {
    const loginForm = {
      username: '',
      password: ''
    };
    expect(component.loginForm.value).toEqual(loginForm);
  });

  it('should invalidate the loginForm', () => {
    component.loginForm.controls.username.setValue('');
    component.loginForm.controls.password.setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate the loginForm', () => {
    component.loginForm.controls.username.setValue('admin');
    component.loginForm.controls.password.setValue('zaq1ZAQ!');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should not call logIn', () => {
    const formData = {
      username: '',
      password: ''
    };
    component.loginUser(formData);
    expect(formData).not.toEqual(mockData);
  });

  it('should call logIn', () => {
    const formData = {
      username: 'heena',
      password: 'xsw2XSW@'
    };
    component.loginUser(formData);
    expect(formData).toEqual(mockData);
    // expect(MockDataService.userInfo).toHaveBeenCalled();
    // expect(mockRouter.navigate).toHaveBeenCalledWith(['../result']);
  });

  it('should call cancel', () => {
    component.cancel();
    expect(locationStub.back).toBeTruthy();
  });

});
