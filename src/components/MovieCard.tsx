import React from "react";

interface MovieCardProps {
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
  const imageUrl = `https://image.tmdb.org/t/p/w500/${image}`;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  m-3">
      <div>
        <img src={imageUrl} alt="Movie poster" />
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// export default MovieCard;
