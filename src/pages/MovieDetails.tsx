import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieCardProps } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieCardProps | null>();

  const page = 1;

  const location = useLocation();
  const movieId = location.pathname.split("/")[2];

  const { data } = useFetch(`movie/${movieId}`);

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data, movieId]);

  // console.log({ data });

  return (
    <main>
      <div className="min-h-[87vh]">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://images.idgesg.net/images/article/2021/08/istock-1189727248-100900824-large.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
