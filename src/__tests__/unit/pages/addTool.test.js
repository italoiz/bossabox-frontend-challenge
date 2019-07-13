import React from 'react';
import { fireEvent, act, wait } from '@testing-library/react';

import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../../routes';

describe('AddTool | Page', () => {
  it('should render a modal dialog', () => {
    const { getByTestId } = renderWithRouter(<App />, '/add-tool');

    const dialog = getByTestId('dialog-addTool');

    expect(dialog.getAttribute('role')).toBe('dialog');
  });

  it('should to be exists a <form /> element inside page', () => {
    const { getByTestId } = renderWithRouter(<App />, '/add-tool');

    const dialog = getByTestId('dialog-addTool');

    expect(!!dialog.querySelector('form')).toBe(true);
  });

  it('should to be display errors when form submit with invalid data', async () => {
    const { getByTestId } = renderWithRouter(<App />, '/add-tool');

    const form = getByTestId('form');

    act(() => {
      fireEvent.submit(form);
    });

    await wait(() => {
      expect(!!form.querySelectorAll('[aria-invalid=true]')).toBe(true);
    });
  });

  it('should to be close modal dialog when successful submit', async () => {
    const { getByTestId, getByLabelText, queryByTestId } = renderWithRouter(
      <App />,
      '/add-tool'
    );

    const form = getByTestId('form');

    // fill form
    getByLabelText('title').value = 'tool title';
    getByLabelText('link').value = 'https://tool.com/';
    getByLabelText('tags').value = 'tag1 tag2';
    getByLabelText('description').value = 'description of my best tool!!!';

    act(() => {
      fireEvent.submit(form);
    });

    await wait(() => {
      expect(queryByTestId('dialog-addTool')).not.toBeInTheDocument();
    });
  });
});
