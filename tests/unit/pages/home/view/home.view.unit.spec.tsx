import React from 'react';
import Home from '@pages/_with-sidebar-layout/(home)/controller/home.controller';

import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render home', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
