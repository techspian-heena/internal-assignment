import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata, storiesOf } from "@storybook/angular";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ResultComponent } from './result.component';

storiesOf('Result', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ResultComponent],
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserModule
      ]
    })
  )
  .add('empty', () => ({
    component: ResultComponent,
    props: {
      btnclr: 'tomato'
    }
  }))

  .add('with one row and edit-delete', () => ({
    component: ResultComponent,
    props: {
      enableEditDelete: true,
      musicList: [{ id: 1, title: 'Emptyness', category: 'English', description: 'Gajendra Verma sound recordist from mumbai.' }]
    }
  }))

  .add('with multiple rows', () => ({
    component: ResultComponent,
    props: {
      btnclr: 'rgb(197, 48, 197)',
      enableEditDelete: false,
      musicList: [
        { id: 1, title: 'Emptyness', category: 'English', description: 'Gajendra Verma sound recordist from mumbai.' },
        { id: 2, title: 'Ye jo desh hai mera', category: 'Patriotic', description: 'Hindi indian music by A.R. Rahman' }
      ]
    }
  }));
