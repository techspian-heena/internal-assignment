import { Component, Input, OnInit } from '@angular/core';
import { Music } from 'src/app/model/music';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() music: Music;

  @Input()
  storybookColor: 'gray' | 'blue' | 'violet';

  @Input()
  headerColor;

  constructor() { }

  ngOnInit(): void {
  }

}
