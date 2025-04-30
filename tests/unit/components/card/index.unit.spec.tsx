import React from 'react';
import Card from '@components/card';
import { render } from '@testing-library/react';

describe('Card', () => {
  it('should render card component', () => {
    const { container } = render(<Card></Card>);

    expect(container).toMatchSnapshot();
  });
});
