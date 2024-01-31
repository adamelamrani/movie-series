import './App.css';
import Card from './components/card/Card';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import { useGetNowPlayingMoviesQuery } from './redux/api/moviesApi';
import { useGetPopularSeriesQuery } from './redux/api/seriesApi';
import { FetchErrorTMDB } from './types/ErrorTMDB';
import { Movies } from './types/Movies';
import SeriesInterface from './types/Series';

function App() {
  const { data, error } = useGetNowPlayingMoviesQuery<{
    data: Movies;
    isLoading: boolean;
    error: FetchErrorTMDB;
  }>({});

  const { data: seriesData, error: seriesError } = useGetPopularSeriesQuery<{
    data: SeriesInterface;
    isLoading: boolean;
    error: FetchErrorTMDB;
  }>({});

  return (
    <div className="appMainContainer">
      {error && (
        <>
          <p>
            <i>There has been an error loading the movies</i>
          </p>
          <p>
            <i>{error.data.status_message}</i>
          </p>
        </>
      )}

      <Header title="" />
      <h2>Now in Theatres</h2>
      <Carousel>
        {data?.results.map((element) => (
          <Card
            linkTo="movie"
            key={element.id}
            id={element.id}
            title={element.title}
            poster={element.poster_path}
            vote_average={element.vote_average}
            vote_count={element.vote_count}
            movie={element}
          />
        ))}
      </Carousel>

      {seriesError && (
        <>
          <p>
            <i>There has been an error loading the series</i>
          </p>
          <p>
            <i>{seriesError.data.status_message}</i>
          </p>
        </>
      )}
      <h2>Popular Series</h2>
      <Carousel>
        {seriesData?.results.map((element) => (
          <Card
            linkTo="serie"
            key={element.id}
            id={element.id}
            title={element.name}
            poster={element.poster_path}
            vote_average={element.vote_average}
            vote_count={element.vote_count}
            serie={element}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
