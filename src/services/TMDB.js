import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const page = 1;
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builders) => ({
    //* Get Genres
    getGenres: builders.query({
      query: () => {
        return `genre/movie/list?api_key=${tmdbApiKey}`;
      },
    }),
    //* Get Movies by [Type]
    getMovies: builders.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // search movies by query
        if (searchQuery)
          return `/search/movie?query=${searchQuery}&api_key=${tmdbApiKey}&page=${page}`;

        // get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "string")
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;

        // get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "number")
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        // get popular movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // *Get Movie by id
    getMovie: builders.query({
      query: (id) => {
        return `movie/${id}?api_key=${tmdbApiKey}&append_to_response=videos,credits`;
      },
    }),
  }),
});
export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery } =
  tmdbApi;
