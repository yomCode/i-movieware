import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MovieList = lazy(() => import("../pages/MovieList"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Search = lazy(() => import("../pages/Search"));

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/movies/top_rated" element={<MovieList />} />
      <Route path="/movies/popular" element={<MovieList />} />
      <Route path="/movies/upcoming" element={<MovieList />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
