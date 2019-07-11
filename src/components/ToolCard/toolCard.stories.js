import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';

import ToolCard from './index';

const tool = {
  id: 1,
  title: 'Notion',
  link: 'https://notion.so',
  description:
    'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
  tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
};

storiesOf('Components | ToolCard', module)
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('simple usage', () => <ToolCard tool={tool} />)
  .add('remove callback', () => (
    <ToolCard
      tool={{ ...tool, title: 'Tool Example' }}
      onRemove={action('onRemove')}
    />
  ));
