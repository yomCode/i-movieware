import React, { useEffect, useState } from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { MovieListProps } from "./MovieList";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard";
const Search = () => {
  const [movies, setMovies] = useState<MovieListProps[] | null>([]);

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams && searchParams.get("q");

  const { data } = useFetch("search/movie", 1, searchQuery as string);

  useEffect(() => {
    if (searchQuery) {
      setMovies(data);
    }
  }, [data, searchQuery]);

  return (
    <main>
      <section className="min-h-[87vh] max-w-7xl m-auto py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies && movies?.length > 0
            ? `Results for '${searchQuery}'`
            : `No Result found for '${searchQuery}'`}{" "}
        </p>
        <div className="flex justify-evenly flex-wrap mt-[2rem]">
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

export default Search;
