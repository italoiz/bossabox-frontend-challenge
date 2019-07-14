import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, DialogContentText } from '@material-ui/core';
import { isRegExp, escapeRegExp, camelCase } from 'lodash';

import {
  Container,
  Header,
  Title,
  Description,
  Tags,
  Tag,
  RemoveButton,
  AlertConfirm,
  AlertTitle,
  AlertContent,
  AlertFooter,
  AlertCancelButton,
  AlertConfirmButton,
} from './styles';

export default function ToolCard({ tool, onRemove, markTextAt }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  /** handle remove */
  function handleRemove() {
    /* istanbul ignore next */
    if (onRemove && typeof onRemove === 'function') {
      const { id, title } = tool;
      onRemove({ id, title });
    }

    setConfirmDelete(false);
  }

  /** handle cancel confirmation dialog */
  function handleCancelRemove() {
    setConfirmDelete(false);
  }

  /** mark text */
  function markText(source) {
    let findText = markTextAt;

    if (typeof source !== 'string' || !findText) {
      return source;
    }

    if (!isRegExp(findText)) {
      findText = new RegExp(`(${escapeRegExp(findText)})`, 'gi');
    }

    const str = source.split(findText);

    return str.map((value, idx) => {
      if (idx % 2 >= 1) {
        const key = `${camelCase(value)}-${idx}`;
        return <mark key={key}>{value}</mark>;
      }
      return value;
    });
  }

  return (
    <Container className="tool-card-container">
      <Header>
        <Title href={tool.link} target="_blank">
          {markText(tool.title)}
        </Title>

        {!!tool.id && (
          <RemoveButton
            className="remove"
            onClick={() => setConfirmDelete(true)}
          >
            <Icon fontSize="inherit">delete</Icon> remove
          </RemoveButton>
        )}
      </Header>

      <Description>{markText(tool.description)}</Description>

      <Tags className="tags">
        {tool.tags.map(tag => (
          <Tag key={tag}>{markText(tag)}</Tag>
        ))}
      </Tags>

      <AlertConfirm open={confirmDelete} data-testid="dialog-confirmPopup">
        <AlertTitle>
          <Icon>delete</Icon>
          Excluindo ferramenta...
        </AlertTitle>

        <AlertContent>
          <DialogContentText>
            Você está excluindo &quot;<strong>{tool.title}</strong>&quot; da
            lista de ferramentas. Esta ação não poderá ser desfeita, deseja
            continuar assim mesmo?
          </DialogContentText>
        </AlertContent>

        <AlertFooter>
          <AlertCancelButton
            data-testid="dialog-cancelButton"
            onClick={handleCancelRemove}
          >
            Não, cancelar!
          </AlertCancelButton>

          <AlertConfirmButton
            data-testid="dialog-confirmButton"
            onClick={handleRemove}
          >
            Sim, continuar.
          </AlertConfirmButton>
        </AlertFooter>
      </AlertConfirm>
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
  /** Mark text at found position */
  markTextAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp),
  ]),
};

/** Default props */
ToolCard.defaultProps = {
  onRemove: null,
  markTextAt: null,
};
