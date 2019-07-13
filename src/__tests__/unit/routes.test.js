import React from 'react';
import { Redirect } from 'react-router-dom';

import renderWithRouter from '../utils/renderWithRouter';
import Routes from '../../routes';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Redirect: jest.fn(() => null),
}));

describe('Routes', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should redirect to home path when not exists route', async () => {
    renderWithRouter(<Routes />, '/not-exists-route');

    expect(Redirect).toHaveBeenCalledWith(
      expect.objectContaining({
        to: '/',
      }),
      expect.any(Object)
    );
  });
});
