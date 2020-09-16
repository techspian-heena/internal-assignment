import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { DatashareService } from 'src/app/services/datashare.service';
import { AddMusicAction, UpdateMusicAction } from 'src/app/store/actions/music.actions';
import { ActionComponent } from './action.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  const locationStub = {
    back: jasmine.createSpy('back')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule
      ],
      declarations: [ActionComponent],
      providers: [
        DatashareService,
        provideMockStore({
          initialState: {
            music: {
              list: [],
              loading: false
            }
          },
        }),
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn()
          }
        },
        { provide: Location, useValue: locationStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSave', () => {
    const user = { title: 'emptyness', category: 'english', description: 'hjjj hhhh' };
    const store = TestBed.get(Store);
    const action = new AddMusicAction(user);
    const spy = jest.spyOn(store, 'dispatch');

    component.onSave();
    expect(spy).toHaveBeenCalled();
  });

  it('should call edit', () => {
    const user = { title: 'emptyness', category: 'english', description: 'hjjj hhhh' };
    const store = TestBed.get(Store);
    const action = new UpdateMusicAction(user);
    const spy = jest.spyOn(store, 'dispatch');

    component.edit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call cancel', () => {
    component.cancel();
    expect(locationStub.back).toHaveBeenCalled();
  });
});
