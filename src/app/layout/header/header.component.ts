import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() storybookClr;
  @Input() buttonClr;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn(): void {
    this.router.navigate(['./entry/login']);
  }

  signUp(): void {
    this.router.navigate(['./entry/sign-up']);
  }

}
