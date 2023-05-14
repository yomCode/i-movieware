import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import useAsync from "../api/useAsync";
import getMovies, {
  GetMovies,
  MovieResponse,
} from "../api/TMDBAPIs/fetchMovie";
import { MoviesRequestResponse } from "../api/TMDBAPIs/fetchMovie";
// import Pic from ;

interface MovieListProps {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

const MovieList = () => {
  const [movies, setMiovies] = React.useState<MovieListProps[] | null>(null);
  //   const [MoviesResponse, onSubmitRequest, MoviesPending, MoviesError] =
  //     useAsync<GetMovies, MovieResponse, any>(getMovies);

  //   const page = 1;
  //   const type = "popular";

  //   useEffect(() => {
  //     onSubmitRequest({ page, type });
  //   }, [onSubmitRequest]);

  //   useEffect(() => {
  //     if (MoviesResponse) console.log(MoviesResponse);
  //   }, [MoviesResponse]);

  const page = 1;

  const params = useLocation();
  const type = params?.pathname.split("/")[2] ?? "now_playing";
  console.log({ type });

  const getMivies = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_TMDB_API_URL}/movie/${type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => setMiovies(res?.data?.results));
  }, [type, page]);

  console.log(movies);

  useEffect(() => {
    getMivies();
  }, [getMivies]);

  return (
    <main>
      <section className=" max-w-7xl m-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              image={movie.poster_path}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
