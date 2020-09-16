import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { SignUpComponent } from './sign-up.component';

storiesOf('Signup', module)
    .addDecorator(
        moduleMetadata({
            declarations: [SignUpComponent],
            imports: [
                ReactiveFormsModule,
                BrowserModule,
                CommonModule,
                FormsModule,
                StoreModule.forRoot({}),
                RouterTestingModule,
            ]
        })
    )

    .add('default', () => ({
        component: SignUpComponent,
        props: {
        }
    }))