import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('Given an App component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  describe('When it is rendered', () => {
    it('It should render a header', () => {
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });
  });
});
