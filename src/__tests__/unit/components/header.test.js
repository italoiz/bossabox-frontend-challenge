import React from 'react';
import { render } from '@testing-library/react';

import { Header } from '../../../components';

describe('Header | Component', () => {
  it('should to be exists <header> tag inside component', () => {
    const { container } = render(<Header />);

    expect(!!container.querySelector('header')).toBe(true);
  });

  it('should to be exists <h1> tag with title', () => {
    const { container } = render(<Header />);

    expect(!!container.querySelector('header > h1')).toBe(true);
  });

  it('should to be contains an text inside <h1> title tag', () => {
    const { container } = render(<Header />);

    expect(container.querySelector('header > h1').innerHTML).not.toBe('');
  });

  it('should to be exists <h3> tag with sub title', () => {
    const { container } = render(<Header />);

    expect(!!container.querySelector('header > h3')).toBe(true);
  });

  it('should to be contains an text inside <h3> sub title tag', () => {
    const { container } = render(<Header />);

    expect(container.querySelector('header > h3').innerHTML).not.toBe('');
  });

  it('should to be replace title when title property is passed', () => {
    const { getByText } = render(<Header title="Custom Title" />);

    expect(!!getByText('Custom Title')).toBe(true);
  });

  it('should to be replace sub title when sub title property is passed', () => {
    const { getByText } = render(<Header subtitle="Custom Sub Title" />);

    expect(!!getByText('Custom Sub Title')).toBe(true);
  });
});
