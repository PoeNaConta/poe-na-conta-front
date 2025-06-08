import React from 'react';
import Login from '@pages/login/view/login.view';
import { render } from '@testing-library/react';

describe('LoginView', () => {
  it('should render Login view correctly', () => {
    const { container } = render(<Login />);

    expect(container).toMatchSnapshot();
  });
});
