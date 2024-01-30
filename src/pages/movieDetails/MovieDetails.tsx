import styles from './styles.module.css';
import Carousel from '../../components/carousel/Carousel';
import Card from '../../components/card/Card';
import noImage from '../../assets/no-image.jpg';
import { useParams } from 'react-router-dom';
import {
  useGetMovieByIdQuery,
  useGetMovieTrailerQuery,
} from '../../redux/api/moviesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as emptyBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { useGetMoviesRecomendationsQuery } from '../../redux/api/discoverApi';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  addMovieToFavourites,
  removeMovieFromFavourites,
} from '../../redux/reducers/moviesSlice';
import { Movie } from '../../types/Movies';

const MovieDetails = () => {
  const posterPrefix = 'https://image.tmdb.org/t/p/w500/';
  const favouriteMovies = useAppSelector((state) => state.movies.movies);
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMovieByIdQuery(id as string, {});
  const { data: video } = useGetMovieTrailerQuery(id as string, {});
  const { data: similar } = useGetMoviesRecomendationsQuery(id as string, {});

  const teaserVideo = video?.results.filter(
    (element) => element.type === 'Trailer',
  );

  const isFavourite = favouriteMovies.some(
    (element) => element.id === data?.id,
  );

  const numberSeparator = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const addOrRemoveMovie = (movie: Movie) => {
    if (isFavourite) {
      dispatch(removeMovieFromFavourites(movie));
    } else {
      dispatch(addMovieToFavourites(movie));
    }
  };

  console.log(data);
  return (
    <div className={styles.movieDetailsBox}>
      <header className={styles.sectionHeader}>
        <div className={styles.headerTitles}>
          <h1 className={styles.headingOne}>{data?.title}</h1>
        </div>
        <FontAwesomeIcon
          className={styles.bookMark}
          onClick={() => addOrRemoveMovie(data as Movie)}
          icon={isFavourite ? faBookmark : emptyBookmark}
          color="yellow"
        />
        <div className={styles.headerInfo}>
          <div>
            <h4 className={styles.headingFour}>Total score</h4>
            <p>
              <FontAwesomeIcon icon={faStar} color="yellow" />
              {data?.vote_average.toFixed(2)}/10 from {data?.vote_count}
            </p>
          </div>
          <div>
            <h4 className={styles.headingFour}>Duration</h4>
            <p>{data?.runtime} min.</p>
          </div>
          <div>
            <h4 className={styles.headingFour}>Revenue</h4>
            <p>{numberSeparator(Number(data?.revenue))} $</p>
          </div>
          <div>
            <h4 className={styles.headingFour}>Budget</h4>
            <p>{numberSeparator(Number(data?.budget))} $</p>
          </div>
        </div>
      </header>
      <section className={styles.generalInfo}>
        <div className={styles.imageAndVideo}>
          <div className={styles.imageCard}>
            <img
              className={styles.movieDetailsImage}
              src={
                data?.poster_path
                  ? `${posterPrefix}${data?.poster_path}`
                  : noImage
              }
              alt="Movie poster"
            />
            <div className={styles.movieInfo}>
              <div>
                <h4 className={styles.headingFour}>Score</h4>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  {data?.vote_average.toFixed(2)}
                </p>
              </div>
              <div>
                <h4 className={styles.headingFour}>Revenue</h4>
                <p>{numberSeparator(Number(data?.revenue))} $</p>
              </div>
              <div>
                <h4 className={styles.headingFour}>Budget</h4>
                <p>{numberSeparator(Number(data?.budget))} $</p>
              </div>
            </div>
          </div>
          <iframe
            className={styles.videoFrame}
            src={`https://www.youtube.com/embed/${teaserVideo ? teaserVideo[teaserVideo.length - 1]?.key : video?.results[0]?.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </section>
      <section className={styles.overview}>
        <h2 className={styles.headingTwo}>Overview</h2>
        <div className={styles.overViewWithImage}>
          <img
            className={styles.overViewImage}
            src={
              data?.poster_path
                ? `${posterPrefix}${data?.poster_path}`
                : noImage
            }
            alt="Movie poster"
          />
          <p>{data?.overview}</p>
        </div>
      </section>
      {similar && similar?.results.length > 0 && (
        <section className={styles.similarMovies}>
          <h2 className={(styles.headingTwo, styles.recommendedTitle)}>
            Similar movies
          </h2>
          <Carousel>
            {similar?.results.map((element) => (
              <Card
                linkTo="movie"
                id={element.id}
                key={element.id}
                title={element.title}
                poster={element.poster_path}
                vote_average={element.vote_average}
                vote_count={element.vote_count}
                movie={element}
              />
            ))}
          </Carousel>
        </section>
      )}
    </div>
  );
};

export default MovieDetails;
