import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';

import SearchBar from './index';

storiesOf('Components | SearchBar', module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('simple usage', () => <SearchBar />)
  .add('custom checkbox label', () => (
    <SearchBar checkboxLabel="custom checkbox label" />
  ))
  .add('submit callback', () => <SearchBar onSubmit={action('onSubmit')} />);
