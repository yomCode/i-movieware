import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface FetchProps {
  path: string;
  page: number;
}

export const useFetch = (path: string, page: number, query: string = "") => {
  const [data, setData] = useState([]);
  console.log({ query });

  const url = `${process.env.REACT_APP_TMDB_API_URL}/${path}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}&query=${query}`;

  console.log({ url });
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url).then((res) => setData(res?.data?.results));
    };
    fetchData();
  }, [url]);

  return { data };
};
