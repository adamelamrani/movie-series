import { useParams } from 'react-router-dom';
import {
  useGetSerieTrailerQuery,
  useGetSeriesDetailsQuery,
} from '../../redux/api/seriesApi';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useGetSeriesRecomendationsQuery } from '../../redux/api/discoverApi';
import Carousel from '../../components/carousel/Carousel';
import Card from '../../components/card/Card';
import noImage from '../../assets/no-image.jpg';

const SerieDetails = () => {
  const posterPrefix = 'https://image.tmdb.org/t/p/w500/';
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSeriesDetailsQuery(id as string, {});
  const { data: video } = useGetSerieTrailerQuery(id as string, {});
  const { data: similar } = useGetSeriesRecomendationsQuery(id as string, {
    skip: !data,
  });

  const teaserVideo = video?.results.filter(
    (element) => element.type === 'Trailer',
  );

  return (
    <div className={styles.serieDetailsBox}>
      <header className={styles.sectionHeader}>
        <div className={styles.headerTitles}>
          <h1 className={styles.headingOne}>{data?.name}</h1>
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
            <h4 className={styles.headingFour}>Number of seasons</h4>
            <p>{data?.number_of_seasons}</p>
          </div>
          <div>
            <h4 className={styles.headingFour}>Number of episodes</h4>
            <p>{data?.number_of_episodes}</p>
          </div>
        </div>
      </header>
      <section className={styles.generalInfo}>
        <div className={styles.imageAndVideo}>
          <div className={styles.imageCard}>
            <img
              className={styles.seriesDetailsImage}
              src={
                data?.poster_path
                  ? `${posterPrefix}${data?.poster_path}`
                  : noImage
              }
              alt="Movie poster"
            />

            <div className={styles.serieInfo}>
              <div>
                <h4 className={styles.headingFour}>Score</h4>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  {data?.vote_average.toFixed(2)}
                </p>
              </div>
              <div>
                <h4 className={styles.headingFour}>Seasons</h4>
                <p>{data?.number_of_seasons}</p>
              </div>
              <div>
                <h4 className={styles.headingFour}>Episodes</h4>
                <p>{data?.number_of_episodes}</p>
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
      <section className={styles.similarSeries}>
        <h2 className={(styles.headingTwo, styles.recommendedTitle)}>
          Similar series
        </h2>
        <Carousel>
          {similar?.results.map((element) => (
            <Card
              linkTo="serie"
              id={element.id}
              key={element.id}
              title={element.name}
              poster={element.poster_path}
              vote_average={element.vote_average}
              vote_count={element.vote_count}
              serie={element}
            />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default SerieDetails;
