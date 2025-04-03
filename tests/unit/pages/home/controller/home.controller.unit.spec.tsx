import React from 'react';
import HomeController from '@pages/home/index.page';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('HomeController', () => {
  it('should render controller', () => {
    render(<HomeController />);
    const title = screen.getByText('Home Page');
    expect(title).toBeInTheDocument();
  });
});
