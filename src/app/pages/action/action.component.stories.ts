import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ActionComponent } from './action.component';

storiesOf('Action', module)
  .addDecorator(
    moduleMetadata({
      declarations: [ActionComponent],
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        BrowserModule
      ]
    })
  )

  .add('default', () => ({
    component: ActionComponent,
    props: {
      btnclr: 'tomato'
    }
  }))

  .add('In Edit mode', () => ({
    component: ActionComponent,
    props: {
      id: 1,
      title: 'Emptyness',
      category: 'English',
      description: 'Gajendra Verma sound recordist from mumbai.'
    }
  }))

  .add('In Add New mode', () => ({
    component: ActionComponent,
    props: {
      title: '',
      category: '',
      description: '',
      btnclr: '#10ac84'
    }
  }));


