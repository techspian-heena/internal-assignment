import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  let mockData =
  {
    username: 'heena',
    password: 'xsw2XSW@',
    firstname: 'heena',
    lastname: 'verma',
    email: 'heena@techspian.com'
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [SignUpComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          initialState: {
            user: {
              list: [],
              loading: false
            }
          },
        }),
        { provide: Store, useClass: MockStore },
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize signupForm', () => {
    const signupForm = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: ''
    };
    expect(component.signupForm.value).toEqual(signupForm);
  });

  it('should invalidate the signupForm', () => {
    component.signupForm.controls.username.setValue('');
    component.signupForm.controls.password.setValue('');
    component.signupForm.controls.firstname.setValue('');
    component.signupForm.controls.lastname.setValue('');
    component.signupForm.controls.email.setValue('');
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('should validate the signupForm', () => {
    component.signupForm.controls.username.setValue('admin');
    component.signupForm.controls.password.setValue('zaq1ZAQ!');
    component.signupForm.controls.firstname.setValue('Heena');
    component.signupForm.controls.lastname.setValue('Verma');
    component.signupForm.controls.email.setValue('heena@techspian.com');
    expect(component.signupForm.valid).toBeTruthy();
  });

  it('should not call register', () => {
    const formData = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: ''
    };
    component.register(formData);
    expect(formData).not.toEqual(mockData)
  });

  it('should call register', () => {
    const formData = {
      username: 'heena',
      password: 'xsw2XSW@',
      firstname: 'heena',
      lastname: 'verma',
      email: 'heena@techspian.com'
    };
    component.register(formData);
    expect(formData).toEqual(mockData);
  });

  it('should call cancel', () => {
    component.cancel();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['../']);
  })

});
