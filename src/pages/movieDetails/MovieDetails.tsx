import { useParams } from 'react-router-dom';
import {
  useGetMovieByIdQuery,
  useGetMovieTrailerQuery,
} from '../../redux/api/moviesApi';

const MovieDetails = () => {
  const posterPrefix = 'https://image.tmdb.org/t/p/w500/';
  const { id } = useParams<{ id: string }>();
  const { data } = useGetMovieByIdQuery(id as string, {});
  const { data: video } = useGetMovieTrailerQuery(id as string, {});

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.overview}</p>
      <img src={`${posterPrefix}${data?.poster_path}`} alt="Movie poster" />
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${video?.results[0].key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default MovieDetails;
