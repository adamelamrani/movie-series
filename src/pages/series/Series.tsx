import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { useGetTopRatedSeriesQuery } from '../../redux/api/seriesApi';
import { FetchErrorTMDB } from '../../types/ErrorTMDB';
import SeriesInterface from '../../types/Series';
import styles from './styles.module.css';

const Series = () => {
  const { data, error } = useGetTopRatedSeriesQuery<{
    data: SeriesInterface;
    isLoading: boolean;
    error: FetchErrorTMDB;
  }>({});

  return (
    <div className={styles.seriesComponent}>
      {error && (
        <>
          <p>
            <i>There has been an error loading the series</i>
          </p>
          <p>
            <i>{error.data.status_message}</i>
          </p>
        </>
      )}

      <Header title="Top Rated Series" />
      <List>
        {data?.results.map((element) => (
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
      </List>
    </div>
  );
};

export default Series;
