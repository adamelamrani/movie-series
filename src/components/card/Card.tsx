import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as emptyBookmark } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { SeriesResult } from '../../types/Series';
import { Movie } from '../../types/Movies';
import noImage from '../../assets/no-image.jpg';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  addMovieToFavourites,
  addSeriesToFavourites,
  removeMovieFromFavourites,
  removeSeriesFromFavourites,
} from '../../redux/reducers/moviesSlice';

interface CardProps {
  id: number;
  title: string;
  poster: string | null;
  vote_average: number;
  vote_count: number;
  movie?: Movie;
  serie?: SeriesResult;
  linkTo?: 'movie' | 'serie';
}

const Card = ({
  id,
  title,
  poster,
  vote_average,
  linkTo,
  movie,
  serie,
}: CardProps) => {
  const favourite = useAppSelector((state) => state.movies);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';

  const isFavouriteMovie = favourite.movies.some(
    (element) => element.id === id,
  );
  const isFavouriteSerie = favourite.series.some(
    (element) => element.id === id,
  );

  const addOrRemoveMovie = (movie: Movie) => {
    if (isFavouriteMovie) {
      dispatch(removeMovieFromFavourites(movie));
    } else {
      dispatch(addMovieToFavourites(movie));
    }
  };

  const addOrRemoveSerie = (serie: SeriesResult) => {
    if (isFavouriteSerie) {
      dispatch(removeSeriesFromFavourites(serie));
    } else {
      dispatch(addSeriesToFavourites(serie));
    }
  };

  return (
    <li className={styles.cardContainer}>
      <img
        onClick={() => navigate(`/${linkTo}/${id}`)}
        className={styles.movieImage}
        src={poster ? `${imageUrlPrefix}${poster}` : noImage}
        alt={`Image poster from ${movie ? 'movie' : 'serie'} ${title}`}
      />
      <div className={styles.titleBox}>
        <div className={styles.titleHeader}>
          <h3 className={styles.movieTitle}>{title}</h3>
          <p className={styles.movieParagraph}>
            <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
            {vote_average.toFixed(2)}
          </p>
        </div>
      </div>
      <FontAwesomeIcon
        title="bookmark"
        icon={isFavouriteMovie || isFavouriteSerie ? faBookmark : emptyBookmark}
        className={styles.bookmarkIcon}
        onClick={() =>
          movie
            ? addOrRemoveMovie(movie as Movie)
            : addOrRemoveSerie(serie as SeriesResult)
        }
      />
    </li>
  );
};

export default Card;
