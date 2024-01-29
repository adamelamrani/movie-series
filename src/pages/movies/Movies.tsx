import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import List from '../../components/list/List';
import { useGetTopRatedMoviesQuery } from '../../redux/api/moviesApi';
import { FetchErrorTMDB } from '../../types/ErrorTMDB';
import { Movies as MoviesType } from '../../types/Movies';

const Movies = () => {
  const { data, error } = useGetTopRatedMoviesQuery<{
    data: MoviesType;
    isLoading: boolean;
    error: FetchErrorTMDB;
  }>({});

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

      <Header title="Top Rated Movies" />
      <List>
        {data?.results.map((element) => (
          <Card
            id={element.id}
            key={element.id}
            title={element.title}
            poster={element.poster_path}
            vote_average={element.vote_average}
            vote_count={element.vote_count}
          />
        ))}
      </List>
    </>
  );
};

export default Movies;
