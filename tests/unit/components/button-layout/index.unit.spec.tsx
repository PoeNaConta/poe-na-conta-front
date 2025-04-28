import React from 'react';
import ButtonLayout from '@components/button-layout';
import { render } from '@testing-library/react';
import { ButtonLayoutProps } from '@components/button-layout/types';

describe('ButtonLayout', () => {
  it('should render button layout with primary button', () => {
    const { container } = render(
      <ButtonLayout primaryButton={<button>example primary button</button>} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render button layout with secondary button', () => {
    const { container } = render(
      <ButtonLayout
        primaryButton={<button>example primary button</button>}
        secondaryButton={<button>example secondary button</button>}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it.each([{ row: true }, { column: true }])(
    'should render button layout with direction %s',
    (
      directionProps:
        | { row: true; column?: never }
        | { row?: never; column: true },
    ) => {
      const { container } = render(
        <ButtonLayout
          {...directionProps}
          primaryButton={<button>example primary button</button>}
        />,
      );

      expect(container).toMatchSnapshot();
    },
  );

  it.each(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])(
    'should render button layout with direction %s',
    (space: ButtonLayoutProps['space']) => {
      const { container } = render(
        <ButtonLayout
          space={space}
          primaryButton={<button>example primary button</button>}
          secondaryButton={<button>example secondary button</button>}
        />,
      );

      expect(container).toMatchSnapshot();
    },
  );

  it('should not render button layout as row', () => {
    const { container } = render(
      <ButtonLayout
        row={false}
        primaryButton={<button>example primary button</button>}
      />,
    );

    expect(container.firstElementChild).not.toHaveClass(
      'lds--button-layout--row',
    );
  });

  it.each([true, false])(
    'should render button layout with fullWidth=%s',
    (fullWidth: boolean) => {
      const { container } = render(
        <ButtonLayout
          fullWidth={fullWidth}
          primaryButton={<button>example primary button</button>}
        />,
      );

      expect(container).toMatchSnapshot();
    },
  );
});
