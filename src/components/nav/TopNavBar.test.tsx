import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import TopNavBar from './TopNavBar';
import styles from './styles.module.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('Given a TopNavBar component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <TopNavBar />
      </BrowserRouter>
    </Provider>,
  );

  describe('When it is rendered', () => {
    it('It should render a nav element containing a list of five elements', () => {
      const nav = screen.getByRole('navigation');
      const listItem = screen.getAllByRole('listitem');
      const list = screen.getByRole('list');
      expect(nav).toBeInTheDocument();
      expect(list).toBeInTheDocument();
      expect(listItem.length).toBe(5);
    });

    it('It should render a logo', () => {
      const logo = screen.getByRole('img');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', '/src/assets/M.png');
    });
  });

  describe('When it is rendered,', () => {
    it('each anchor should contain its corresponding href', () => {
      const homeLink = screen.getByText('Home');
      const seriesLink = screen.getByText('Series');
      const moviesLink = screen.getByText('Movies');

      expect(homeLink).toBeInTheDocument();
      expect(seriesLink).toBeInTheDocument();
      expect(moviesLink).toBeInTheDocument();

      expect(homeLink).toHaveAttribute('href', '/');
      expect(seriesLink).toHaveAttribute('href', '/series');
      expect(moviesLink).toHaveAttribute('href', '/movies');
    });
  });

  describe('If the user clicks on any link,', () => {
    it('It should redirect the user to the expected path', () => {
      const homeLink = screen.getByText('Home');
      const seriesLink = screen.getByText('Series');
      const moviesLink = screen.getByText('Movies');

      fireEvent.click(homeLink);
      expect(window.location.href).toBe('http://localhost:3000/');

      fireEvent.click(seriesLink);
      expect(window.location.href).toBe('http://localhost:3000/series');

      fireEvent.click(moviesLink);
      expect(window.location.href).toBe('http://localhost:3000/movies');
    });
  });

  describe('When it is rendered, it should render a button and a list with class navList', () => {
    it('When the button is clicked, it should add class "active" to the list', () => {
      const button = screen.getByRole('button');
      const list = screen.getByRole('list');

      expect(button).toBeInTheDocument();
      expect(list).not.toHaveClass(styles.active);
      fireEvent.click(button);
      expect(list).toHaveClass(`${styles.navList} ${styles.active}`);
    });
  });
});
