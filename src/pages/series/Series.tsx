import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { useGetPopularSeriesQuery } from '../../redux/api/seriesApi';
import { FetchErrorTMDB } from '../../types/ErrorTMDB';
import SeriesInterface from '../../types/Series';

const Series = () => {
  const { data, error } = useGetPopularSeriesQuery<{
    data: SeriesInterface;
    isLoading: boolean;
    error: FetchErrorTMDB;
  }>({});

  console.log(data);
  return (
    <>
      {error && (
        <>
          <p>
            <i>There has been an error loading the</i>
          </p>
          <p>
            <i>{error.data.status_message}</i>
          </p>
        </>
      )}

      <Header title="Popular Series" />
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
