import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  act,
  wait,
} from '@testing-library/react';

import { ToolCard } from '../../../components';

// default tool.
const tool = {
  id: 1,
  title: 'Notion',
  link: 'https://notion.so',
  description:
    'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
  tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
};

describe('Tool Card | Component', () => {
  it('should have a title with <a> tag', () => {
    const { container } = render(<ToolCard tool={tool} />);

    const title = container.querySelector('.tool-card-container > header > a');

    expect(title.innerHTML).toBe(tool.title);
  });

  it('should have a description after <header> tag', () => {
    const { container } = render(<ToolCard tool={tool} />);

    const description = container.querySelector(
      '.tool-card-container > header + p'
    );

    expect(description.innerHTML).toBe(tool.description);
  });

  it('should have a tag list after description', () => {
    const { container } = render(<ToolCard tool={tool} />);

    const tags = container.querySelector('ul.tags');

    expect(tags.querySelectorAll('li').length).toBe(5);
  });

  it('should have remove button', () => {
    const { container } = render(<ToolCard tool={tool} />);

    expect(!!container.querySelector('button.remove')).toBe(true);
  });

  it('should not have remove button when not exists tool id', () => {
    const otherTool = { ...tool };
    delete otherTool.id;

    const { container } = render(<ToolCard tool={otherTool} />);

    expect(!!container.querySelector('button.remove')).toBe(false);
  });

  it('should to be display confirmation dialog when pressed delete button', async () => {
    const { container, getByTestId } = render(<ToolCard tool={tool} />);

    const button = container.querySelector('button.remove');
    fireEvent.click(button);

    const dialog = await waitForElement(() =>
      getByTestId('dialog-confirmPopup')
    );

    expect(dialog).toBeInTheDocument();
  });

  it('should not to be display confirmation dialog before pressed delete button', () => {
    const { queryByTestId } = render(<ToolCard tool={tool} />);
    expect(queryByTestId('dialog-confirmPopup')).not.toBeInTheDocument();
  });

  it('should to be display tool name inside confirmation dialog', async () => {
    const { container, getByText } = render(<ToolCard tool={tool} />);

    const button = container.querySelector('button.remove');
    fireEvent.click(button);

    const text = await waitForElement(() =>
      getByText((content, elm) => {
        return (
          elm.closest('[data-testid=dialog-confirmPopup]') &&
          content.includes(tool.title)
        );
      })
    );

    expect(text.textContent).toBe(tool.title);
  });

  it('should to be exists cancel button inside confirmation dialog', async () => {
    const { container, getByTestId } = render(<ToolCard tool={tool} />);

    const button = container.querySelector('button.remove');
    fireEvent.click(button);

    const cancelButton = await waitForElement(() =>
      getByTestId('dialog-cancelButton')
    );

    expect(cancelButton).toBeInTheDocument();
  });

  it('should close confimation dialog when click in cancel button', async () => {
    const { container, getByTestId, queryByTestId } = render(
      <ToolCard tool={tool} />
    );

    const button = container.querySelector('button.remove');
    fireEvent.click(button);

    const cancelButton = await waitForElement(() =>
      getByTestId('dialog-cancelButton')
    );

    act(() => {
      fireEvent.click(cancelButton);
    });

    await wait(() => {
      expect(queryByTestId('dialog-cancelButton')).not.toBeInTheDocument();
    });
  });

  it('should to be exists confirm button inside confirmation dialog', async () => {
    const { container, getByTestId } = render(<ToolCard tool={tool} />);

    const button = container.querySelector('button.remove');
    fireEvent.click(button);

    const confirmButton = await waitForElement(() =>
      getByTestId('dialog-confirmButton')
    );

    expect(confirmButton).toBeInTheDocument();
  });

  it('should to be called onRemove property when press confirm button', async () => {
    const onRemove = jest.fn();

    const { container, getByTestId, queryByTestId } = render(
      <ToolCard tool={tool} onRemove={onRemove} />
    );

    const button = container.querySelector('button.remove');
    fireEvent.click(button);

    const confirmButton = await waitForElement(() =>
      getByTestId('dialog-confirmButton')
    );

    act(() => {
      fireEvent.click(confirmButton);
    });

    await wait(() => {
      expect(queryByTestId('dialog-confirmPopup')).not.toBeInTheDocument();

      expect(onRemove).toHaveBeenCalledWith({
        id: tool.id,
        title: tool.title,
      });
    });
  });

  it('should put <mark> element around of found text when markTextAt property is passed', () => {
    const { container } = render(
      <ToolCard tool={tool} markTextAt="planning" />
    );

    expect(container).toContainHTML('<mark>planning</mark>');
  });
});
