import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { LoginComponent } from './login.component';

storiesOf('Login', module)
  .addDecorator(
    moduleMetadata({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        StoreModule.forRoot({}),
        RouterTestingModule
      ]
    })
  )

  .add('default', () => ({
    component: LoginComponent,
    props: {
    }
  }))

  .add('with alert msg', () => ({
    component: LoginComponent,
    props: {
      btnclr: '#006266',
      formclr: '#10ac84',
      isInValidUser: true
    }
  }))