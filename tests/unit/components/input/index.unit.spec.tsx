import React from 'react';
import Input from '@components/input';
import { render } from '@testing-library/react';

describe('Input', () => {
  it('should render basic input', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('should render full input', () => {
    const { container } = render(
      <Input
        label="Test label"
        placeholder="Test placeholder"
        name="Example name"
        type="text"
        value="value"
        onChange={vi.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
