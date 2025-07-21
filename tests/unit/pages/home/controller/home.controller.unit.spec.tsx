import React from 'react';
import HomeController from '@pages/_with-sidebar-layout/(home)/controller/home.controller';

import { render, screen } from '@testing-library/react';

describe('HomeController', () => {
  it('should render controller', () => {
    render(<HomeController />);
    const title = screen.getByText('Home Page');
    expect(title).toBeInTheDocument();
  });
});
