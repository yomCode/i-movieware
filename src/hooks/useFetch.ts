import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (path: string, page?: number, query: string = "") => {
  const [data, setData] = useState(null);

  const url = page
    ? `${process.env.REACT_APP_TMDB_API_URL}/${path}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}&query=${query}`
    : `${process.env.REACT_APP_TMDB_API_URL}/${path}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

  console.log({ url });

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url).then((res) => setData(res?.data?.results));
    };
    fetchData();
  }, [url]);
  console.log({ data });
  return { data };
};
