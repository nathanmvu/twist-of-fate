import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the title art and player prompt', () => {
    render(<App />);

    expect(screen.getByLabelText(/ascii title/i)).toBeInTheDocument();
    expect(screen.getByText(/tune in/i)).toBeInTheDocument();
  });
});
