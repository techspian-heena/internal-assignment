import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppUserState } from 'src/app/model/app-state.model';
import { User } from 'src/app/model/user';
import { DatashareService } from 'src/app/services/datashare.service';
import { LoadUserAction } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  isInValidUser: boolean;
  loginForm: FormGroup;
  isLoggedin: boolean;
  users$: Observable<Array<User>>;

  @Input() btnclr;
  @Input() formclr;

  constructor(
    private store: Store<AppUserState>,
    private fb: FormBuilder,
    private datashareService: DatashareService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.users$ = this.store.select(store => store.user.list);

    this.store.dispatch(new LoadUserAction());

    this.users$.forEach(res => {
      console.log(res);
      this.users = res;
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  loginUser(formdata: any): void {
    this.isLoggedin = true;
    if (this.loginForm.invalid) {
      return;
    }

    if (formdata.username != null && formdata.password != null) {
      const validUser = this.users.find(x => x.username === formdata.username && x.password === formdata.password);
      if (validUser != null) {
        this.datashareService.userInfo = validUser;
        this.router.navigate(['../result']);
      } else {
        this.isInValidUser = true;
        console.log('invalid username or password...please try again!!');
      }
    } else {
      console.log('please enter usename');
    }
  }

  cancel(): void {
    this.location.back();
  }

}
