import React from 'react';
import LoginForm from '@pages/login/components/login-form';
import { render } from '@testing-library/react';

describe('LoginForm', () => {
  it('should render LoginForm correctly', () => {
    const { container } = render(<LoginForm />);

    expect(container).toMatchSnapshot();
  });
});
