import React from 'react';
import { render, wait, act, fireEvent } from '@testing-library/react';

import App from '../../App';
import { api } from '../../services';

describe('App', () => {
  it('should to be render with tools from API', async () => {
    mockApi.onGet('/tools').reply(200, [
      {
        id: 1,
        title: 'tool1',
        description: 'description tool1',
        link: 'https://tool1.com/',
        tags: ['tag1', 'tag2'],
      },
    ]);

    const { getByTestId } = render(<App />);

    await wait(() => {
      const tools = getByTestId('tools');
      expect(tools.querySelectorAll('article').length).toBe(1);
    });
  });

  it('should to be call API with filter params when search on input field', () => {
    jest.useFakeTimers();
    mockApi.onGet(/^\/tools.*/).reply(200, []);

    const spy = jest.spyOn(api, 'get');

    const { getByTestId } = render(<App />);

    act(() => {
      fireEvent.click(getByTestId('tags-only'));
      fireEvent.input(getByTestId('query'), {
        target: { value: 'foobar' },
      });

      jest.runAllTimers();
    });

    expect(spy).toHaveBeenLastCalledWith('/tools?tags_like=foobar');
  });

  it('should to be call API with DELETE verb when remove button on tool be clicked', async () => {
    const spy = jest.spyOn(api, 'delete');

    mockApi.onGet(/^\/tools.*/).reply(200, [
      {
        id: 83,
        title: 'foo bar tool',
        description: 'description foo bar',
        tags: ['tag1'],
      },
    ]);

    mockApi.onDelete(/^\/tools\/[0-9]+$/).reply(204);

    const { getByText, queryAllByText, getByTestId } = render(<App />);

    // const tool = await waitForElement(() => getByText('foo bar tool'));
    await wait(() => getByText('foo bar tool'));

    const tool = getByText('foo bar tool').closest('.tool-card-container');
    const removeButton = tool.querySelector('button.remove');

    act(() => {
      fireEvent.click(removeButton);
    });

    await wait(() => getByTestId('dialog-confirmButton'));

    act(() => {
      fireEvent.click(getByTestId('dialog-confirmButton'));
    });

    await wait(() => {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(queryAllByText('foo bar tool').length).toBe(0);
    });
  });
});
