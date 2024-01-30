import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Error from '../pages/error/Error';
import TopNavBar from '../components/nav/TopNavBar';
import Series from '../pages/series/Series';
import Movies from '../pages/movies/Movies';
import MovieDetails from '../pages/movieDetails/MovieDetails';
import SerieDetails from '../pages/serieDetails/SerieDetails';

const MainLayout = () => {
  return (
    <>
      <TopNavBar />
      <Routes>
        {/*Entry page*/}
        <Route path="/" Component={App} />
        <Route path="/series" Component={Series} />
        <Route path="/movies" Component={Movies} />
        <Route path="/movie/:id" Component={MovieDetails} />
        <Route path="/serie/:id" Component={SerieDetails} />

        {/*Error page*/}
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
};

export default MainLayout;
