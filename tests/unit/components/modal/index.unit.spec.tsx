import React from 'react';
import Modal from '@components/modal';
import { render } from '@testing-library/react';

describe('Modal', () => {
  const mockedOnClose = vi.fn();
  const renderModal = (isOpen: boolean) =>
    render(
      <Modal isOpen={isOpen} onClose={mockedOnClose}>
        modal
      </Modal>,
    );

  it('should render modal disabled', () => {
    const { container } = renderModal(false);

    expect(container).toMatchSnapshot();
  });

  it('should render modal enabled', () => {
    const { container } = renderModal(true);

    expect(container).toMatchSnapshot();
  });
});
