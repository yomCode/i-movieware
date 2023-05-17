import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const MovieList = lazy(() => import("../pages/MovieList"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Search = lazy(() => import("../pages/Search"));

export const AllRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      }
    >
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
    </Suspense>
  );
};
