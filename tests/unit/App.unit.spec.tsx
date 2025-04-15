import React from 'react';
import App from 'src/App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should render app', () => {
    render(<App />);
    const title = screen.getByText('Home Page');
    expect(title).toBeInTheDocument();
  });
});
