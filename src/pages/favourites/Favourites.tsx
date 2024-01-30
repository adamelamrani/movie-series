import Card from '../../components/card/Card';
import Carousel from '../../components/carousel/Carousel';
import Header from '../../components/header/Header';
import { useAppSelector } from '../../redux/store';

const Favourites = () => {
  const favouritesState = useAppSelector((state) => state.movies);
  return (
    <>
      <Header title="" />
      <h2>Now in Theatres</h2>
      <Carousel>
        {favouritesState.movies?.map((element) => (
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
      <h2>Popular Series</h2>
      <Carousel>
        {favouritesState.series?.map((element) => (
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
    </>
  );
};

export default Favourites;
