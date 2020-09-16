import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ThemeService } from 'src/app/services/theme.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login', () => {
    component.logIn();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['./entry/login']);
  });

  it('should call signUp', () => {
    component.signUp();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['./entry/sign-up']);
  });
});
