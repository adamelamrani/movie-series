import { Movie } from '../../types/Movies';
import { SeriesResult } from '../../types/Series';

export const movieData: Movie = {
  id: 11121212,
  title: 'Aquaman',
  poster_path: '/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg',
  vote_average: 1,
  vote_count: 1,
  overview: 'General info about the movie',
  release_date: '2023-12-20',
  genre_ids: [1],
  original_language: 'en',
  backdrop_path: '/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg',
  popularity: 1,
  video: false,
  adult: false,
  original_title: 'Aquaman',
};

export const serieData: SeriesResult = {
  id: 11131313,
  name: 'The Simpsons',
  poster_path: '/yTZQkSsxUFJZJe67IenRM0AEklc.jpg',
  vote_average: 1,
  vote_count: 1,
  overview: 'General info about the serie',
  first_air_date: '1989-12-17',
  genre_ids: [1],
  original_language: 'en',
  backdrop_path: '/yTZQkSsxUFJZJe67IenRM0AEklc.jpg',
  popularity: 1,
  original_name: 'The Simpsons',
  origin_country: ['US'],
};
