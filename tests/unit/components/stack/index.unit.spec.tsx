import React from 'react';
import Stack from '@components/stack';
import { render } from '@testing-library/react';

describe('Stack', () => {
  it('should render with default props', () => {
    const { container } = render(<Stack>Test</Stack>);

    expect(container).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const { container } = render(
      <Stack
        space="sm"
        align="center"
        justify="end"
        direction="row"
        wrap="wrap"
      >
        Test
      </Stack>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with wrap = true', () => {
    const { container } = render(<Stack wrap>Test</Stack>);

    expect(container).toMatchSnapshot();
  });

  it('should render with fullWidth = true', () => {
    const { container } = render(<Stack fullWidth>Test</Stack>);

    expect(container).toMatchSnapshot();
  });

  it('should render with custom element', () => {
    const { container } = render(<Stack as="main">Test</Stack>);

    expect(container).toMatchSnapshot();
  });
});
