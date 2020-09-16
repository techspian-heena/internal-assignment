import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DatashareService } from 'src/app/services/datashare.service';
import { DeleteMusicAction } from 'src/app/store/actions/music.actions';
import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let testBedService: DatashareService;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockData =
  {
    id: 1,
    title: 'Emptyness',
    category: 'ENglish'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserModule
      ],
      declarations: [ResultComponent],
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
        { provide: Store, useClass: MockStore },
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.get(DatashareService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout', () => {
    component.logOut();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['../']);
  });

  it('should call addNew', () => {
    component.addNew();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['../action']);
  });

  it('should call edit', () => {
    component.edit(mockData);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['../action']);
  });

});
