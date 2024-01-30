import { Genres } from './Series';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

/* {
    "adult": false,
    "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    "belongs_to_collection": {
        "id": 230,
        "name": "The Godfather Collection",
        "poster_path": "/zqV8MGXfpLZiFVObLxpAI7wWonJ.jpg",
        "backdrop_path": "/mDMCET9Ens5ANvZAWRpluBsMAtS.jpg"
    },
    "budget": 6000000,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 80,
            "name": "Crime"
        }
    ],
    "homepage": "http://www.thegodfather.com/",
    "id": 238,
    "imdb_id": "tt0068646",
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 122.333,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "production_companies": [
        {
            "id": 4,
            "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
            "name": "Paramount",
            "origin_country": "US"
        },
        {
            "id": 10211,
            "logo_path": null,
            "name": "Alfran Productions",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1972-03-14",
    "revenue": 245066411,
    "runtime": 175,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Italian",
            "iso_639_1": "it",
            "name": "Italiano"
        },
        {
            "english_name": "Latin",
            "iso_639_1": "la",
            "name": "Latin"
        }
    ],
    "status": "Released",
    "tagline": "An offer you can't refuse.",
    "title": "The Godfather",
    "video": false,
    "vote_average": 8.707,
    "vote_count": 19370
} */

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
