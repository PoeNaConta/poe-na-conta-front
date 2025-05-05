import React from 'react';
import Input from '@components/input';
import { render } from '@testing-library/react';

describe('Input', () => {
  it('should render basic input', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('should render input with label', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });
});
