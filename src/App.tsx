import { useDispatch } from 'react-redux';
import './App.css';
import { useGetPopularMoviesQuery } from './redux/api/moviesApi';
import { setMovies } from './redux/reducers/moviesSlice';
import { useEffect } from 'react';
import { AppDispatch } from './redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useGetPopularMoviesQuery('', {});

  useEffect(() => {
    if (data) {
      dispatch(setMovies(data.results));
    }
  }, [data]);

  console.log(data);
  return (
    <>
      <p>hi</p>
    </>
  );
}

export default App;
