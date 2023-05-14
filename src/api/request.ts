import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_TMDB_API_URL}`,
});

export default AxiosInstance;
