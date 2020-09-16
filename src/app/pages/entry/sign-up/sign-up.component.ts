import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppUserState } from 'src/app/model/app-state.model';
import { AddUserAction } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  isRegisterd: boolean;

  constructor(
    private store: Store<AppUserState>,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', [Validators.required]],
      lastname: ['', []],
      email: ['', [Validators.required]]
    });
  }

  get formControl() {
    return this.signupForm.controls;
  }

  register(formdata: any): void {

    this.isRegisterd = true;
    if (this.signupForm.invalid) {
      return;
    } else {
      this.store.dispatch(new AddUserAction(formdata));
      this.router.navigate(['./entry/login']);
    }
  }

  cancel(): void {
    this.router.navigate(['../']);
  }

}
