import React, { useState } from 'react';
import { Button, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';

import { modalNavigate } from '../../helpers/navigate';
import { SearchBar, ToolCard } from '../../components';
import { ActionBarContainer, Tools } from './styles';

const tools = [
  {
    id: 1,
    title: 'Notion',
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
  {
    id: 2,
    title: 'Jest',
    link: 'https://jestjs.io',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
];

export default function Home({ history }) {
  const [query, setQuery] = useState(null);

  return (
    <>
      <ActionBarContainer>
        <SearchBar
          checkboxLabel="procurar por tags"
          onSubmit={({ query: _q }) => setQuery(_q)}
        />

        <Button
          size="small"
          variant="outlined"
          onClick={modalNavigate(history, '/add-tool')}
        >
          <Icon>add</Icon>
          adicionar
        </Button>
      </ActionBarContainer>

      <Tools>
        {tools.map(tool => (
          <ToolCard key={String(tool.id)} tool={tool} markTextAt={query} />
        ))}
      </Tools>
    </>
  );
}

/** PropType validation */
Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
