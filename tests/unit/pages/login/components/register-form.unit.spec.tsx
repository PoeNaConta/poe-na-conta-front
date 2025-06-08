import React from 'react';
import RegisterForm from '@pages/login/components/register-form';
import { render } from '@testing-library/react';

describe('RegisterForm', () => {
  it('should render RegisterForm correctly', () => {
    const { container } = render(<RegisterForm />);

    expect(container).toMatchSnapshot();
  });
});
