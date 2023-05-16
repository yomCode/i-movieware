import React, { useCallback, useEffect, useState } from "react";
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
import { useFetch } from "../hooks/useFetch";

export interface MovieListProps {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

const MovieList = () => {
  const [movies, setMovies] = useState<MovieListProps[]>([]);

  const page = 1;

  const params = useLocation();
  const type = params?.pathname.split("/")[2] ?? "now_playing";

  const { data } = useFetch(`movie/${type}`, page);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  return (
    <main>
      <section className="min-h-[87vh] max-w-7xl m-auto py-7">
        <div className="flex xl:justify-start justify-evenly flex-wrap hover:cursor-pointer">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              id={movie?.id}
              title={movie?.title}
              description={movie?.overview}
              image={movie?.poster_path}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
