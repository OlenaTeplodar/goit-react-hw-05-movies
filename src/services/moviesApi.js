import axios from 'axios';

const KEY = '2e28e0889deced997fe5d570fd3e41df';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
    language: 'en-us',
  },
});

export const getMoviesTrending = async () => {
  const { data } = await instance.get('/trending/movie/day?page=1');
  return data.results;
};

export const getMoviesSearch = async query => {
  const { data } = await instance.get(
    `/search/movie?query=${query}&page=1&include_adult=false`
  );
  return data.results;
};

export const getMoviesDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMoviesCasting = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMoviesReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews?page=1`);
  return data.results;
};

// https://api.themoviedb.org/3/movie/550?api_key=2e28e0889deced997fe5d570fd3e41df
