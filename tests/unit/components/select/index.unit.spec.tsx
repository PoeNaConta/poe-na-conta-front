import React from 'react';
import Select from '@components/select';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Select', () => {
  it('should render select component with no options', () => {
    const { container } = render(
      <Select options={[]} onOptionSelected={vi.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render select component with options', () => {
    const { container } = render(
      <Select
        options={[{ label: 'option 1', value: 'option-1' }]}
        onOptionSelected={vi.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render select component with label', () => {
    const { container } = render(
      <Select label="Select label" options={[]} onOptionSelected={vi.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render select component with placeholder', () => {
    const { container } = render(
      <Select
        placeholder="select option"
        options={[{ label: 'option 1', value: 'option-1' }]}
        onOptionSelected={vi.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onOptionSelected when selecting an option', () => {
    const mockedOnOptionSelected = vi.fn();

    render(
      <Select
        placeholder="select option"
        options={[{ label: 'option 1', value: 'option-1' }]}
        onOptionSelected={mockedOnOptionSelected}
      />,
    );

    const select = screen.getByRole('combobox');
    const option = screen.getByRole('option');

    fireEvent.click(select);
    fireEvent.click(option);

    expect(mockedOnOptionSelected).toBeCalledWith(
      {
        label: 'option 1',
        value: 'option-1',
      },
      0,
    );
  });
});
