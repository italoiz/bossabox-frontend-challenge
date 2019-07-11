import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Header from './index';

storiesOf('Components | Header', module)
  .addDecorator(withInfo)
  .add('simple usage', () => <Header />)
  .add('with title', () => <Header title="Custom Title" />)
  .add('with sub title', () => <Header subtitle="Custom Sub Title" />);
