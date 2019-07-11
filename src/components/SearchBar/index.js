import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Input,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
} from './styles';

export default function SearchBar({ onSubmit, checkboxLabel }) {
  const queryInput = useRef(null);
  const tagsOnly = useRef(null);

  /** debounce function */
  const debounce = (fn, time) => {
    let timeout;

    return function _debounce(...args) {
      const call = () => fn.apply(this, ...args);

      clearTimeout(timeout);
      timeout = setTimeout(call, time);
    };
  };

  /** handle submit. */
  function handleSubmit() {
    /* istanbul ignore next */
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit({
        query: queryInput.current.value,
        onlyTags: tagsOnly.current.checked || false,
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        ref={queryInput}
        onInput={debounce(handleSubmit, 400)}
        data-testid="query"
        placeholder="Procurar..."
      />

      <CheckboxContainer htmlFor="search-tags">
        <Checkbox
          ref={tagsOnly}
          onChange={debounce(handleSubmit, 400)}
          data-testid="tags-only"
          id="search-tags"
        />

        <CheckboxLabel>{checkboxLabel}</CheckboxLabel>
      </CheckboxContainer>
    </Form>
  );
}

/** PropTypes validation. */
SearchBar.propTypes = {
  /** When submit form, this called */
  onSubmit: PropTypes.func,
  /** The custom checkbox label */
  checkboxLabel: PropTypes.string,
};

/** Default props */
SearchBar.defaultProps = {
  onSubmit: null,
  checkboxLabel: 'search in tags only',
};
