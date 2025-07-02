import React from 'react';
import Login from '@pages/login/view/login.view';
import { render } from '@testing-library/react';

describe('LoginView', () => {
  it('should render Login view correctly', () => {
    const { container } = render(
      <Login
        isLoadingLogin={false}
        userLoginBody={{ useremail: '', passwordhash: '' }}
        errorMessage={''}
        onLogin={vi.fn()}
        onLoginChange={vi.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
