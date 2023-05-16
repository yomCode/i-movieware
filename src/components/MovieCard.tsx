import React from "react";
import { useNavigate } from "react-router-dom";
import BackupImage from "../assets/backupImage.jpeg";

export interface MovieCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const MovieCard = ({
  id,
  title,
  description,
  image,
}: MovieCardProps) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movie/${id}`);
  };

  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500/${image}`
    : BackupImage;
  const movieDescription = description
    ? description
    : "No description available";
  return (
    <div
      onClick={handleMovieClick}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  m-3 hover:cursor:pointer"
    >
      <div>
        <img className="rounded-lg" src={imageUrl} alt="Movie poster" />
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="font-normal text-gray-700 mt-4">{movieDescription}</p>
      </div>
    </div>
  );
};

// export default MovieCard;
