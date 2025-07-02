import React from 'react';
import LoginForm from '@pages/login/components/login-form';
import { render } from '@testing-library/react';

describe('LoginForm', () => {
  it('should render LoginForm correctly', () => {
    const { container } = render(
      <LoginForm
        isLoadingLogin={false}
        userLoginBody={{ useremail: '', passwordhash: '' }}
        errorMessage={''}
        onSubmit={vi.fn()}
        onChange={vi.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
