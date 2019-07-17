import React, { useState, useEffect, useCallback } from 'react';
import { Button, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { api } from '../../services';
import { modalNavigate } from '../../helpers/navigate';
import { setTools, deleteTool } from '../../store/modules/tools/actions';
import { SearchBar, ToolCard } from '../../components';
import { ActionBarContainer, Tools } from './styles';

export default function Home({ history }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({});
  const tools = useSelector(state => state.tools);

  const refreshTools = useCallback(tool => dispatch(setTools(tool)), [
    dispatch,
  ]);

  const removeTool = useCallback(id => dispatch(deleteTool(id)), [dispatch]);

  useEffect(() => {
    (async function searchTools() {
      const { query = '', onlyTags = false } = search;

      const paramName = onlyTags ? 'tags_like' : 'q';
      const queryString = `${paramName}=${query}`;
      const path = query ? `/tools?${queryString}` : `/tools`;

      const res = await api.get(path);
      refreshTools(res.data);
    })();
  }, [search, refreshTools]);

  async function handleRemoveTool({ id }) {
    await api.delete(`/tools/${id}`);
    removeTool(id);
  }

  return (
    <>
      <ActionBarContainer>
        <SearchBar checkboxLabel="procurar por tags" onSubmit={setSearch} />

        <Button
          size="small"
          variant="outlined"
          onClick={modalNavigate(history, '/add-tool')}
        >
          <Icon>add</Icon>
          adicionar
        </Button>
      </ActionBarContainer>

      <Tools data-testid="tools">
        {tools.map(tool => (
          <ToolCard
            key={String(tool.id)}
            tool={tool}
            markTextAt={search.query}
            data-testid={`toolcard-${tool.id}`}
            onRemove={handleRemoveTool}
          />
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
