import React from 'react';
import { render } from '@testing-library/react';
import Text from '@components/text';
import { TextProps } from '@components/text/types';

describe('Text', () => {
  it.each(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h5', 'span'])(
    'should render element as %s',
    (element: TextProps['as']) => {
      const { container } = render(<Text as={element}>example text</Text>);

      expect(container).toMatchSnapshot();
    },
  );

  it('should render element as label with htmlFor', () => {
    const { container } = render(
      <Text as="label" htmlFor="test-id">
        example text
      </Text>,
    );

    expect(container.firstElementChild.hasAttribute('for')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('should render element as label without htmlFor', () => {
    const { container } = render(
      <Text as="label" htmlFor={null}>
        example text
      </Text>,
    );

    expect(container.firstElementChild.hasAttribute('for')).toBeFalsy();
    expect(container).toMatchSnapshot();
  });

  it('should render element on center', () => {
    const { container } = render(<Text center>example text</Text>);

    expect(container).toMatchSnapshot();
  });

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
