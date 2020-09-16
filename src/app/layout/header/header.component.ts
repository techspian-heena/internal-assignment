import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() storybookClr;
  @Input() buttonClr;
  @Input() isDark: boolean;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.themeService.toggleDark();
    } else {
      this.themeService.toggleLight();
    }
  }

  logIn(): void {
    this.router.navigate(['./entry/login']);
  }

  signUp(): void {
    this.router.navigate(['./entry/sign-up']);
  }

}
