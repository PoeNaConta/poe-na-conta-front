import React from 'react';
import Button from '@components/button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button', () => {
  it.each([{ primary: true }, { secondary: true }])(
    'should render button of type secondary',
    (
      typesProps:
        | { primary: true; secondary?: never }
        | { primary?: never; secondary: true },
    ) => {
      const { container } = render(
        <Button {...typesProps} onClick={vi.fn()}>
          example button
        </Button>,
      );

      expect(container).toMatchSnapshot();
    },
  );

  it('should not render button of type secondary', () => {
    const { container } = render(
      <Button secondary={false} fake>
        example button
      </Button>,
    );

    expect(container).toMatchSnapshot();
    expect(container.firstElementChild).not.toHaveClass(
      'lds--button--secondary',
    );
  });

  it('should render fake button', () => {
    const { container } = render(
      <Button primary fake>
        example button
      </Button>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render button of type %s', () => {
    const onClickMock = vi.fn();
    render(
      <Button primary onClick={onClickMock}>
        example button
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'example button' });
    fireEvent.click(button);

    expect(onClickMock).toBeCalled();
  });
});
