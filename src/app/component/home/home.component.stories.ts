import { StoreModule } from '@ngrx/store';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CardComponent } from '../card/card.component';
import { HomeComponent } from './home.component';

storiesOf('Home', module)
  .addDecorator(
    moduleMetadata({
      declarations: [HomeComponent, CardComponent],
      imports: [StoreModule.forRoot({})]
    })
  )
  .add('empty', () => ({
    component: HomeComponent,
    props: {
      musicList: [{
        title: '',
        category: '',
        description: ''
      }]
    }
  }))

  .add('with title', () => ({
    component: HomeComponent,
    props: {
      musicList: [{ title: 'Ye jo desh hai mera' }, { title: 'Emptyness' }, { title: 'I love my India' }],
      loading$: false
    }
  }))

  .add('with title and category', () => ({
    component: HomeComponent,
    props: {
      musicList: [
        { title: 'Ye jo desh hai mera', category: 'Patriotic' },
        { title: 'Emptyness', category: 'English' }
      ]
    }
  }))

  .add('with title, category & description', () => ({
    component: HomeComponent,
    props: {
      musicList: [{ title: 'Ye jo desh hai mera', category: 'Patriotic', description: 'Hindi indian music by A.R. Rahman' }],
    }
  }));
