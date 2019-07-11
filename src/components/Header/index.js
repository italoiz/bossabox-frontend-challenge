import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, SubTitle } from './styles';

/** Header component to use on header of aplication. */
export default function Header({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}

/** Proptypes validation */
Header.propTypes = {
  /** An string contains a custom title text. */
  title: PropTypes.string,
  /** An string contains a custom sub title text. */
  subtitle: PropTypes.string,
};

/** Default Proptypes */
Header.defaultProps = {
  title: 'VUTTR',
  subtitle: 'Very Useful Tools to Remember',
};
