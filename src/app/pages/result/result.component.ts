import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/model/app-state.model';
import { Music } from 'src/app/model/music';
import { User } from 'src/app/model/user';
import { DatashareService } from 'src/app/services/datashare.service';
import { DeleteMusicAction, LoadMusicAction } from 'src/app/store/actions/music.actions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  musicList$: Observable<Array<Music>>;
  userInfo: User;
  @Input() musicList: Music[];
  @Input() enableEditDelete: boolean;
  @Input() btnclr;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private datashareService: DatashareService,
  ) { }

  ngOnInit(): void {
    this.userInfo = this.datashareService.userInfo;
    if (this.userInfo && this.userInfo.username === 'admin') {
      this.enableEditDelete = true;
    }
    this.refreshMusic();
  }

  refreshMusic(): void {
    this.musicList$ = this.store.select(store => store.music.list);
    this.musicList$.forEach(res => {
      if (res && res.length > 0) {
        this.musicList = res;
      }
    });
    this.store.dispatch(new LoadMusicAction());
  }

  public logOut(): void {
    this.datashareService.userInfo = this.userInfo;
    this.router.navigate(['../']);
  }

  addNew(): void {
    this.datashareService.unsubscribe();
    this.router.navigate(['../action']);
  }

  edit(music): void {
    this.datashareService.unsubscribe();
    this.datashareService.setData(music);
    this.router.navigate(['../action']);
  }

  delete(music): void {
    if (confirm('Are You Sure You want to Delete the Music : ' + music.title + '?')) {
      this.store.dispatch(new DeleteMusicAction(music.id));
    }
  }

}
