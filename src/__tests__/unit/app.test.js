import React from 'react';
import { render } from '@testing-library/react';

import App from '../../App';

describe('App', () => {
  it('should to be render correctly', () => {
    const { container } = render(<App />);

    expect(!!container).toBe(true);
  });
});
