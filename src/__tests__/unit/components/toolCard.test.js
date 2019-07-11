import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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

  it('should to be called onRemove property when remove button clicked', () => {
    const onRemove = jest.fn();

    const { container } = render(<ToolCard tool={tool} onRemove={onRemove} />);

    const button = container.querySelector('button.remove');
    fireEvent.click(button);

    expect(onRemove).toHaveBeenCalledWith({
      id: tool.id,
      title: tool.title,
    });
  });
});
