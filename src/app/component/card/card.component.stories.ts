import { CardComponent } from './card.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Card', module)
  .add('empty', () => ({
    component: CardComponent,
    props: {
      storybookColor: 'tomato',
      headerColor: 'rgb(245, 69, 38)',
      music: { title: '' }
    }
  }))

  .add('with title', () => ({
    component: CardComponent,
    props: {
      storybookColor: 'violet',
      headerColor: 'rgb(197, 48, 197)',
      music: { title: 'Emptyness' }
    }
  }))
  .add('with title and category', () => ({
    component: CardComponent,
    props: {
      storybookColor: '#10ac84',
      headerColor: '#006266',
      music: { title: 'I love my India', category: 'Patriotic' }
    }
  }))
  .add('with title, category & description', () => ({
    component: CardComponent,
    props: {
      storybookColor: 'rgb(224, 222, 222)',
      headerColor: 'gray',
      music: { title: 'I love my India', category: 'Patriotic', description: 'Hindi indian music by A.R. Rahman' }
    }
  }));
