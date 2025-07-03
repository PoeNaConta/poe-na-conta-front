import React from 'react';
import Login from '@pages/login/view/login.view';
import { render } from '@testing-library/react';

describe('LoginView', () => {
  it('should render Login view correctly', () => {
    const { container } = render(
      <Login
        registerFormProps={{
          isLoading: false,
          userRegisterBody: {
            name: '',
            useremail: '',
            passwordhash: '',
          },
          errorMessage: '',
          handleRegister: vi.fn(),
          handleChange: vi.fn(),
        }}
        loginFormProps={{
          isLoading: false,
          userLoginBody: {
            useremail: '',
            passwordhash: '',
          },
          errorMessage: '',
          handleLogin: vi.fn(),
          handleChange: vi.fn(),
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
