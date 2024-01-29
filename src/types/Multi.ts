export interface MultiResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  //Multi result may include either movies or series, so either name or title will be present
  name?: string;
  title: string;
  original_language: string;
  //Multi result may include either movies or series, so either original_name or original_title will be present
  original_name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  release_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export default interface MultiInterface {
  page: number;
  results: MultiResult[];
  total_pages: number;
  total_results: number;
}
