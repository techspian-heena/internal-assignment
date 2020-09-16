import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from 'src/app/model/music';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/app-state.model';
import { LoadMusicAction } from 'src/app/store/actions/music.actions';

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


  musicList$: Observable<Array<Music>>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.musicList$ = this.store.select(store => store.music.list);
    this.store.dispatch(new LoadMusicAction());

    this.musicList$.forEach(res => {
      this.musicList = res;
    });
  }

}
