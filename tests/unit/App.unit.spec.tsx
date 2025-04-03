import React from 'react';
import App from 'src/App';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should render app', () => {
    render(<App />);
    const title = screen.getByText('Home Page');
    expect(title).toBeInTheDocument();
  });
});
