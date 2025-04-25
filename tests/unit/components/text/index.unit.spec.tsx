import React from 'react';
import { render } from '@testing-library/react';
import Text, { TextProps } from '@components/text';

describe('Text', () => {
  it.each(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h5', 'span'])(
    'should render element as %s',
    (element: TextProps['as']) => {
      const { container } = render(<Text as={element}>example text</Text>);

      expect(container).toMatchSnapshot();
    },
  );

  it.each(['xs', 's', 'm', 'l', 'xl', 'hero'])(
    'should render with size %s',
    (size: TextProps['size']) => {
      const { container } = render(<Text size={size}>example text</Text>);

      expect(container).toMatchSnapshot();
      expect(container.firstElementChild).toHaveClass('lds--text--' + size);
    },
  );

  it('should render with default props', () => {
    const { container } = render(<Text>example text</Text>);

    expect(container).toMatchSnapshot();
    expect(container.firstElementChild).toHaveClass('lds--text--md');
  });

  it.each([
    { primary: true },
    { secondary: true },
    { tertiary: true },
    { onBrand: true },
  ])('should render as %s', (props: TextProps) => {
    const { container } = render(<Text {...props}>example text</Text>);

    expect(container).toMatchSnapshot();
  });
});
