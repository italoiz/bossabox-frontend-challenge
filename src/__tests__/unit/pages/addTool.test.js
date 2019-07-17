import React from 'react';
import { fireEvent, act, wait, waitForElement } from '@testing-library/react';

import { api } from '../../../services';
import renderWithRouter from '../../utils/renderWithRouter';
import Routes from '../../../routes';

describe('AddTool | Page Dialog', () => {
  let tool;

  beforeEach(() => {
    tool = {
      id: 43,
      title: 'foo bar tool',
      link: 'https://foo-bar.tool',
      description: 'foo bar description tool',
      tags: ['foo', 'bar'],
    };

    mockApi.onGet('/tools').reply(200, []);
    mockApi.onPost('/tools').reply(200, tool);
  });

  it('should render a modal dialog', async () => {
    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const dialog = wrapper.getByTestId('dialog-addTool');

    expect(dialog.getAttribute('role')).toBe('dialog');
  });

  it('should to be exists a <form /> element inside page', () => {
    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const dialog = wrapper.getByTestId('dialog-addTool');

    expect(!!dialog.querySelector('form')).toBe(true);
  });

  it('should to be display errors when form submit with invalid data', async () => {
    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const form = wrapper.getByTestId('form');

    act(() => {
      fireEvent.submit(form);
    });

    await wait(() => {
      expect(!!form.querySelectorAll('[aria-invalid=true]')).toBe(true);
    });
  });

  it('should to be close modal dialog when successful submit', async () => {
    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const form = wrapper.getByTestId('form');

    // fill form
    wrapper.getByLabelText('title').value = 'tool title';
    wrapper.getByLabelText('link').value = 'https://tool.com/';
    wrapper.getByLabelText('tags').value = 'tag1 tag2';
    wrapper.getByLabelText('description').value =
      'description of my best tool!!!';

    act(() => {
      fireEvent.submit(form);
    });

    await wait(() => {
      expect(wrapper.queryByTestId('dialog-addTool')).not.toBeInTheDocument();
    });
  });

  it('should send POST request to API when successful form submit', async () => {
    const spy = jest.spyOn(api, 'post');
    // mockApi.onPost('/tools').reply(200, {});

    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const form = wrapper.getByTestId('form');

    // fill form
    wrapper.getByLabelText('title').value = 'tool title';
    wrapper.getByLabelText('link').value = 'https://tool.com/';
    wrapper.getByLabelText('tags').value = 'tag1 tag2';
    wrapper.getByLabelText('description').value =
      'description of my best tool!!!';

    act(() => {
      fireEvent.submit(form);
    });

    await wait(() => {
      expect(spy).toHaveBeenCalledWith(
        '/tools',
        expect.objectContaining({
          title: 'tool title',
          link: 'https://tool.com/',
          tags: ['tag1', 'tag2'],
          description: 'description of my best tool!!!',
        })
      );
    });
  });

  it('should display error message when form submit is not successful', async () => {
    mockApi.onPost('/tools').reply(400, {
      message: 'Error message!!!',
    });

    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const form = wrapper.getByTestId('form');

    // fill form
    wrapper.getByLabelText('title').value = 'tool title';
    wrapper.getByLabelText('link').value = 'https://tool.com/';
    wrapper.getByLabelText('tags').value = 'tag1 tag2';
    wrapper.getByLabelText('description').value =
      'description of my best tool!!!';

    act(() => {
      fireEvent.submit(form);
    });

    await wait(() => {
      expect(wrapper.queryByText('Error message!!!')).toBeInTheDocument();
    });
  });

  it('should reset error message when click to close error message', async () => {
    mockApi.onPost('/tools').reply(400, {
      message: 'Error message!!!',
    });

    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const form = wrapper.getByTestId('form');

    // fill form
    wrapper.getByLabelText('title').value = 'tool title';
    wrapper.getByLabelText('link').value = 'https://tool.com/';
    wrapper.getByLabelText('tags').value = 'tag1 tag2';
    wrapper.getByLabelText('description').value =
      'description of my best tool!!!';

    act(() => {
      fireEvent.submit(form);
    });

    const button = await waitForElement(() =>
      wrapper.getByTestId('snackbar-close')
    );

    act(() => {
      fireEvent.click(button);
    });

    await wait(() => {
      expect(wrapper.queryByTestId('Error message!!!')).not.toBeInTheDocument();
    });
  });

  it('should insert the new tool filled to tool list when successful form submit', async () => {
    const wrapper = renderWithRouter(<Routes />, '/add-tool');
    const form = wrapper.getByTestId('form');

    // fill form
    wrapper.getByLabelText('title').value = tool.title;
    wrapper.getByLabelText('link').value = tool.link;
    wrapper.getByLabelText('tags').value = tool.tags.join(' ');
    wrapper.getByLabelText('description').value = tool.description;

    act(() => {
      fireEvent.submit(form);
    });

    const findItem = (content, elm) => {
      const insideTools = elm.closest('section[data-testid=tools]');
      return insideTools && content === 'foo bar tool';
    };

    await wait(() => {
      expect(!!wrapper.getByText(findItem)).toBe(true);
    });
  });
});
