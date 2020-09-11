import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from 'src/app/model/music';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/app-state.model';
import { LoadMusicAction, DeleteMusicAction, AddMusicAction } from 'src/app/store/music.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()
  storybookColor: 'gray' | 'blue' | 'violet';

  @Input()
  headerColor;

  @Input() musicList;

  public get bodyColor(): string[] {
    return [`${this.storybookColor}`];
  }

  public get header(): string[] {
   return [`${this.headerColor}`];
}


 musicList$: Observable<Array<Music>>;
 loading$: Observable<Boolean>;
 error$: Observable<Error>;
  newMusic: Music = { id: 0, title: '', category: '', description: '' }

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.musicList$ = this.store.select(store => store.music.list);
    this.loading$ = this.store.select(store => store.music.loading);
    this.error$ = this.store.select(store => store.music.error);

    this.store.dispatch(new LoadMusicAction());
  }

}
