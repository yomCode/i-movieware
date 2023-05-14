import { AxiosResponse } from "axios";
import request from "../request";

export interface MovieParams {
  page: number;
  type: string;
}

export interface MoviesRequestResponse {
  success: string;
  message: string;
  data: {};
}

export type MovieResponse = AxiosResponse<MoviesRequestResponse>;

export type GetMovies = (payload: MovieParams) => Promise<MovieResponse>;

const getMovies: GetMovies = (payload: MovieParams) => {
  return request.get(
    `/movie/${payload.type}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${payload.page}`
  );
};

export default getMovies;
