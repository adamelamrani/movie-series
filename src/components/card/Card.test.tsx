import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';
import { movieData, serieData } from '../../utils/mockups/cardData';
import styles from './styles.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import noImage from '../../assets/no-image.jpg';

describe('Given a Card component', () => {
  describe('When it receives a movie', () => {
    it('Then it should display a listitem element with a class cardContainer', () => {
      const { unmount } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ul>
              <Card
                id={movieData.id}
                poster={movieData.poster_path}
                title={movieData.title}
                vote_average={movieData.vote_average}
                vote_count={movieData.vote_count}
                key={movieData.id}
                linkTo="movie"
                movie={movieData}
              />
            </ul>
          </BrowserRouter>
        </Provider>,
      );

      const expectedeElement = screen.getAllByRole('listitem');
      expect(expectedeElement[0]).toHaveClass(styles.cardContainer);
      expect(expectedeElement.length).toBe(1);
      unmount();
    });

    it("There should a heading element with the movie's title", () => {
      const { unmount } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ul>
              <Card
                id={movieData.id}
                poster={movieData.poster_path}
                title={movieData.title}
                vote_average={movieData.vote_average}
                vote_count={movieData.vote_count}
                key={movieData.id}
                linkTo="movie"
                movie={movieData}
              />
            </ul>
          </BrowserRouter>
        </Provider>,
      );

      const expectedeElement = screen.getByRole('heading');
      expect(expectedeElement).toBeInTheDocument();
      expect(expectedeElement.textContent).toBe(movieData.title);
      unmount();
    });

    it("There should a img element with the movie's poster", () => {
      const { unmount } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ul>
              <Card
                id={movieData.id}
                poster={movieData.poster_path}
                title={movieData.title}
                vote_average={movieData.vote_average}
                vote_count={movieData.vote_count}
                key={movieData.id}
                linkTo="movie"
                movie={movieData}
              />
            </ul>
          </BrowserRouter>
        </Provider>,
      );

      const expectedeElement = screen.getAllByRole('img');
      expectedeElement.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
      expect(expectedeElement[0]).toHaveAttribute(
        'src',
        `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
      );
      unmount();
    });
  });

  describe("If the user clicks on the poster's image", () => {
    it('Then it should navigate to the movie detail page', () => {
      const { unmount } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ul>
              <Card
                id={movieData.id}
                poster={movieData.poster_path}
                title={movieData.title}
                vote_average={movieData.vote_average}
                vote_count={movieData.vote_count}
                key={movieData.id}
                linkTo="movie"
                movie={movieData}
              />
            </ul>
          </BrowserRouter>
        </Provider>,
      );

      const expectedeElement = screen.getAllByRole('img');
      expect(expectedeElement[0]).toBeInTheDocument();
      fireEvent.click(expectedeElement[0]);
      expect(window.location.href).toBe(
        `http://localhost:3000/movie/${movieData.id}`,
      );
      unmount();
    });
  });

  describe('When it receives a serie', () => {
    it('Then it should display a listitem element with a class cardContainer', () => {
      const { unmount } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ul>
              <Card
                id={serieData.id}
                poster={serieData.poster_path}
                title={serieData.name}
                vote_average={serieData.vote_average}
                vote_count={serieData.vote_count}
                key={serieData.id}
                linkTo="serie"
                serie={serieData}
              />
            </ul>
          </BrowserRouter>
        </Provider>,
      );

      const expectedeElement = screen.getAllByRole('listitem');
      expect(expectedeElement[0]).toHaveClass(styles.cardContainer);
      expect(expectedeElement.length).toBe(1);
      unmount();
    });
  });

  describe('If the poster path does not exist', () => {
    it('Then it should display a default image', () => {
      serieData.poster_path = null;
      const { unmount } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ul>
              <Card
                id={serieData.id}
                poster={serieData?.poster_path}
                title={serieData.name}
                vote_average={serieData.vote_average}
                vote_count={serieData.vote_count}
                key={serieData.id}
                linkTo="serie"
                serie={serieData}
              />
            </ul>
          </BrowserRouter>
        </Provider>,
      );

      const expectedeElement = screen.getAllByRole('img');
      expect(expectedeElement[0]).toBeInTheDocument();
      expect(expectedeElement[0]).toHaveAttribute('src', noImage);
      unmount();
    });
  });
});
