import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';

import {
  Container,
  Header,
  Title,
  Description,
  Tags,
  Tag,
  RemoveButton,
} from './styles';

export default function ToolCard({ tool, onRemove }) {
  /** handle remove */
  function handleRemove() {
    /* istanbul ignore next */
    if (onRemove && typeof onRemove === 'function') {
      const { id, title } = tool;
      onRemove({ id, title });
    }
  }

  return (
    <Container className="tool-card-container">
      <Header>
        <Title href={tool.link} target="_blank">
          {tool.title}
        </Title>

        {!!tool.id && (
          <RemoveButton className="remove" onClick={handleRemove}>
            <Icon fontSize="inherit">delete</Icon> remove
          </RemoveButton>
        )}
      </Header>

      <Description>{tool.description}</Description>

      <Tags className="tags">
        {tool.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </Container>
  );
}

/** PropTypes validation. */
ToolCard.propTypes = {
  /** Tool data */
  tool: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  /** When remove button clicked */
  onRemove: PropTypes.func,
};

/** Default props */
ToolCard.defaultProps = {
  onRemove: null,
};
