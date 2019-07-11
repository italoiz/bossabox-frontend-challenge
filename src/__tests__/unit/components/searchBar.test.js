import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { SearchBar } from '../../../components';

describe('Search Bar | Component', () => {
  it('should to be exists text input element inside component', () => {
    const { container } = render(<SearchBar />);

    expect(!!container.querySelector('input[type=text]')).toBe(true);
  });

  it('should to be exists checkbox element inside component', () => {
    const { container } = render(<SearchBar />);

    expect(!!container.querySelector('input[type=checkbox]')).toBe(true);
  });

  it('should to be exists a form element inside component around of inputs elements', () => {
    const { container } = render(<SearchBar />);

    expect(!!container.querySelector('form > input')).toBe(true);
  });

  it('should to be exists label tag around checkbox input element', () => {
    const { container } = render(<SearchBar />);

    const checkbox = container.querySelector('label > input[type=checkbox]');
    expect(!!checkbox).toBe(true);
  });

  it('should to be exists placeholder on text input element', () => {
    const { getByTestId } = render(<SearchBar />);

    const queryInput = getByTestId('query');
    expect(queryInput.hasAttribute('placeholder')).toBe(true);
    expect(queryInput.getAttribute('placeholder')).not.toBe('');
  });

  it('should to be exists a description label for checkbox element', () => {
    const { container } = render(<SearchBar />);

    expect(
      !!container.querySelector('label > input[type=checkbox] + span')
    ).toBe(true);
  });

  it('should to be call onSubmit property when passed to component', () => {
    jest.useFakeTimers();

    const onSubmit = jest.fn();

    const { getByTestId } = render(<SearchBar onSubmit={onSubmit} />);

    fireEvent.input(getByTestId('query'), {
      target: {
        value: 'foo bar',
      },
    });

    jest.advanceTimersByTime(400);

    expect(onSubmit).toHaveBeenCalled();
  });

  it('should return data when submit form', () => {
    jest.useFakeTimers();

    const onSubmit = jest.fn();

    const { getByTestId } = render(<SearchBar onSubmit={onSubmit} />);

    fireEvent.input(getByTestId('query'), {
      target: {
        value: 'foo bar',
      },
    });

    jest.advanceTimersByTime(400);

    expect(onSubmit).toHaveBeenCalledWith({
      query: 'foo bar',
      onlyTags: false,
    });
  });

  it('should return data with tags only is true', () => {
    jest.useFakeTimers();

    const onSubmit = jest.fn();

    const { getByTestId } = render(<SearchBar onSubmit={onSubmit} />);

    fireEvent.click(getByTestId('tags-only'));

    jest.advanceTimersByTime(400);

    expect(onSubmit).toHaveBeenCalledWith({
      query: '',
      onlyTags: true,
    });
  });
});
