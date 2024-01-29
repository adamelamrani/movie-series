import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import List from './components/list/List';
import { useGetNowPlayingMoviesQuery } from './redux/api/moviesApi';
import { FetchErrorTMDB } from './types/ErrorTMDB';
import { Movies } from './types/Movies';

function App() {
  const { data, error } = useGetNowPlayingMoviesQuery<{
    data: Movies;
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

      <Header title="Now in Theaters" />
      <List>
        {data?.results.map((element) => (
          <Card
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
}

export default App;
