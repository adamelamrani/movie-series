import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { useGetTopRatedSeriesQuery } from '../../redux/api/seriesApi';
import { FetchErrorTMDB } from '../../types/ErrorTMDB';
import SeriesInterface from '../../types/Series';

const Series = () => {
  const { data, error } = useGetTopRatedSeriesQuery<{
    data: SeriesInterface;
    isLoading: boolean;
    error: FetchErrorTMDB;
  }>({});

  return (
    <>
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
            id={element.id}
            key={element.id}
            title={element.name}
            poster={element.poster_path}
            vote_average={element.vote_average}
            vote_count={element.vote_count}
          />
        ))}
      </List>
    </>
  );
};

export default Series;
