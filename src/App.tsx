import './App.css';
import List from './components/list/List';
import { useGetPopularMoviesQuery } from './redux/api/moviesApi';
import { FetchErrorTMDB } from './types/ErrorTMDB';
import { Movies } from './types/Movies';

function App() {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  const { data, error } = useGetPopularMoviesQuery<{
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
      <List>
        {data?.results.map((element) => (
          <li key={element.id}>
            {element.title}
            <img
              width={200}
              src={`${imageUrlPrefix}${element.poster_path}`}
              alt={`Image poster from movie ${element.original_title}`}
            />
          </li>
        ))}
      </List>
    </>
  );
}

export default App;
