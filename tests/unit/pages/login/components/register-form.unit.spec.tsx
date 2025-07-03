import React from 'react';
import RegisterForm from '@pages/login/components/register-form';
import { render } from '@testing-library/react';

describe('RegisterForm', () => {
  it('should render RegisterForm correctly', () => {
    const { container } = render(
      <RegisterForm
        isLoading={false}
        userRegisterBody={{ name: '', passwordhash: '', useremail: '' }}
        errorMessage={''}
        handleRegister={vi.fn()}
        handleChange={vi.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
