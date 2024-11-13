import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2JiOTk0MTExYTEwNmQ2NzNjNjFkM2Y4NzI5MGUyYSIsIm5iZiI6MTcyOTM2ODE0OS40MzAxNjUsInN1YiI6IjY3MTQwZTU5YzZlMzA0MDk2MTk1ZmNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVGNs4g5Qk-euCNPJW4k84jsIECn1CTB9oBgA3PRmQ8',
  },
  params: {
    language: 'en-US',
  },
});

export const trandMovies = async () => {
  const response = await instance.get('/trending/movie/day');
  return response.data;
};

export const searchMovies = async query => {
  const response = await instance.get('/search/movie', {
    params: {
      include_adult: 'false',
      query: query,
    },
  });
  return response.data;
};

export const moviesById = async id => {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
};

export const castById = async id => {
  const response = await instance.get(`/movie/${id}/credits`);
  return response.data;
};

export const reviewsById = async id => {
  const response = await instance.get(`/movie/${id}/reviews`);
  return response.data;
};
