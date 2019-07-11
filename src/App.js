import React from 'react';
import { Button, Icon } from '@material-ui/core';

import GlobalStyle from './styles/global';
import { Container, ActionBarContainer, Tools } from './styles/app';
import { Header, SearchBar, ToolCard } from './components';

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

export default function App() {
  return (
    <Container>
      <Header />

      <ActionBarContainer>
        <SearchBar checkboxLabel="procurar por tags" />

        <Button size="small" variant="outlined">
          <Icon>add</Icon>
          adicionar
        </Button>
      </ActionBarContainer>

      <Tools>
        {tools.map(tool => (
          <ToolCard key={tool.title} tool={tool} />
        ))}
      </Tools>

      <GlobalStyle />
    </Container>
  );
}
