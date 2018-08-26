import { storiesOf } from '@storybook/angular';
import { AppComponent } from '../app/app.component';

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: AppComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));
