import './App.css';
import List from './components/list/List';
import { useGetPopularMoviesQuery } from './redux/api/moviesApi';
import { FetchErrorTMDB } from './types/ErrorTMDB';
import { Movies } from './types/Movies';

function App() {
  const { data, error } = useGetPopularMoviesQuery<{
    data: Movies;
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
      <List>
        {data?.results.map((element) => (
          <li key={element.id}>{element.title}</li>
        ))}
      </List>
    </>
  );
}

export default App;
