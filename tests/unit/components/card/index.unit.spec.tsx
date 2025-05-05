import React from 'react';
import Card from '@components/card';
import { fireEvent, render } from '@testing-library/react';

describe('Card', () => {
  it('should render card component', () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });

  it('should render card component as form', () => {
    const { container } = render(<Card form />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit when submitting form', () => {
    const mockedOnSubmit = vi.fn();
    const { container } = render(<Card form onSubmit={mockedOnSubmit} />);

    const form = container.firstElementChild;
    fireEvent.submit(form);

    expect(mockedOnSubmit).toHaveBeenCalled();
  });

  it('should call onSubmit when resetting form', () => {
    const mockedOnReset = vi.fn();
    const { container } = render(<Card form onReset={mockedOnReset} />);

    const form = container.firstElementChild;
    fireEvent.reset(form);

    expect(mockedOnReset).toHaveBeenCalled();
  });
});
