import { StoreModule } from '@ngrx/store';
//import { CardComponent } from './card.component';
import { addDecorator, moduleMetadata, storiesOf } from '@storybook/angular';
import { HomeComponent } from './home.component';
//import { TranslateTestingModule } from 'ngx-translate-testing';

storiesOf('Home', module)
.addDecorator(
  moduleMetadata({
      declarations: [HomeComponent],
      imports: [StoreModule.forRoot({})]
  })
)
  .add('empty', () => ({
    component: HomeComponent,
    props: {
      storybookColor: 'tomato'
    }
  }))

  .add('with title', () => ({
    component: HomeComponent,
    props: {
      storybookColor: '#10ac84',
      headerColor: '#006266',
      musicList: [{title: 'The Testaments'}, {title: 'Emptyness'}, {title: 'I love my India'}],
      loading$: false
    }
  }))
  .add('with title and category', () => ({
    component: HomeComponent,
    props: {
      storybookColor: 'tomato',
      headerColor: 'rgb(245, 69, 38)',
      musicList: [{title: 'The Testaments', category: 'Science'}],
    }
  }));