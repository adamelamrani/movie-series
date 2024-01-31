import Card from '../../components/card/Card';
import Carousel from '../../components/carousel/Carousel';
import Header from '../../components/header/Header';
import { useAppSelector } from '../../redux/store';

const Favourites = () => {
  const favouritesState = useAppSelector((state) => state.movies);
  return (
    <>
      <Header title="" />
      <h2>My favourite movies</h2>
      <Carousel>
        {favouritesState.movies.length > 0 ? (
          favouritesState.movies?.map((element) => (
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
          ))
        ) : (
          <p>You don't have any favourite movies yet</p>
        )}
      </Carousel>
      <h2>My favourite series</h2>
      <Carousel>
        {favouritesState.series.length > 0 ? (
          favouritesState.series?.map((element) => (
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
          ))
        ) : (
          <p>You don't have any favourite series yet</p>
        )}
      </Carousel>
    </>
  );
};

export default Favourites;
