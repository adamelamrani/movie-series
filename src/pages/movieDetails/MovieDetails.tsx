import { useParams } from 'react-router-dom';
import {
  useGetMovieByIdQuery,
  useGetMovieTrailerQuery,
} from '../../redux/api/moviesApi';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../components/carousel/Carousel';
import Card from '../../components/card/Card';
import { useGetMoviesRecomendationsQuery } from '../../redux/api/discoverApi';

const MovieDetails = () => {
  const posterPrefix = 'https://image.tmdb.org/t/p/w500/';
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMovieByIdQuery(id as string, {});
  const { data: video } = useGetMovieTrailerQuery(id as string, {});
  const { data: similar } = useGetMoviesRecomendationsQuery(id as string, {});
  const teaserVideo = video?.results.filter(
    (element) => element.type === 'Trailer',
  );

  const numberSeparator = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <div className={styles.movieDetailsBox}>
      <header className={styles.sectionHeader}>
        <div className={styles.headerTitles}>
          <h1 className={styles.headingOne}>{data?.title}</h1>
        </div>
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
            {data?.poster_path && (
              <img
                className={styles.movieDetailsImage}
                src={`${posterPrefix}${data?.poster_path}`}
                alt="Movie poster"
              />
            )}
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
          {data?.poster_path && (
            <img
              className={styles.overViewImage}
              src={`${posterPrefix}${data?.poster_path}`}
              alt="Movie poster"
            />
          )}
          <p>{data?.overview}</p>
        </div>
      </section>
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
              title={element.name}
              poster={element.poster_path}
              vote_average={element.vote_average}
              vote_count={element.vote_count}
            />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default MovieDetails;
