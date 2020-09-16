import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/app-state.model';
import { Music } from 'src/app/model/music';
import { DatashareService } from 'src/app/services/datashare.service';
import { Location } from '@angular/common';
import { AddMusicAction, UpdateMusicAction } from 'src/app/store/actions/music.actions';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() title: string;
  @Input() category: string;
  @Input() description: string;
  @Input() id: number;

  @Input() btnclr;

  constructor(
    private store: Store<AppState>,
    private location: Location,
    private datashareService: DatashareService
  ) { }

  ngOnInit(): void {
    this.datashareService.getData()
      .subscribe(res => {
        if (res != null) {
          this.id = res.id;
          this.title = res.title;
          this.category = res.category;
          this.description = res.description;
        }
      });
  }

  onSave(): void {
    const request: Music = {
      title: this.title,
      category: this.category,
      description: this.description
    };

    this.store.dispatch(new AddMusicAction(request));
    this.location.back();
  }

  edit(): void {
    const request: Music = {
      id: this.id,
      title: this.title,
      category: this.category,
      description: this.description
    };
    this.store.dispatch(new UpdateMusicAction(request));
    this.location.back();
  }

  cancel(): void {
    this.location.back();
  }


}
