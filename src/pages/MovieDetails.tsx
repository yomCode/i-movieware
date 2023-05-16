import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackupImg from "../assets/backupImage.jpeg";

interface MovieDetailsProps {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  vote_average: number;
  vote_count: number;
  budget: number;
  revenue: number;
  runtime: number;
  release_date: string;
  imdb_id: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetailsProps | {}>({});

  const useMovie = movie as MovieDetailsProps;

  const param = useParams();

  const url = `${process.env.REACT_APP_TMDB_API_URL}/movie/${param?.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchMovie = async () => {
      await axios.get(url).then((res) => {
        setMovie(res.data);
      });
    };
    fetchMovie();
  }, [param?.id, url]);

  console.log(movie);

  const imageUrl = useMovie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${useMovie?.poster_path}`
    : BackupImg;

  console.log({ imageUrl });

  return (
    <main className="min-h-[87vh] max-w-7xl mx-auto p-3">
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={imageUrl} alt="" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg	 dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {useMovie?.title}
          </h1>
          <p className="my-4">{useMovie?.overview}</p>
          <p className="my-7 flex flex-wrap gap-2">
            {useMovie?.genres?.map((genre) => (
              <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2">
                {genre?.name}
              </span>
            ))}
          </p>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>{" "}
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">
              <span className="w-1 h-1 mx-1.5 rounded-full dark:bg-gray-400">
                {useMovie?.vote_average}
              </span>
              <span className="text-gray-900 dark:text-white">
                {useMovie?.vote_count + " "} reviews
              </span>
            </p>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            {useMovie?.runtime}
            <span> min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            {useMovie?.budget}
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            {useMovie?.revenue}
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            {useMovie?.release_date}
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href="https://www.imdb.com/title/tt13345606"
              target="_blank"
              rel="noreferrer"
            >
              {useMovie?.imdb_id}{" "}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
