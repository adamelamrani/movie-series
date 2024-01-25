import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given an App component', () => {
  render(<App />);
  describe('When it is rendered', () => {
    it('It should render two images and a heading', () => {
      const image = screen.getAllByRole('img');
      const heading = screen.getByRole('heading');
      expect(image.length).toBe(2);
      image.forEach((element) => {
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('logo' || 'logo react');
      });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe('Vite + React');
    });
  });
});
