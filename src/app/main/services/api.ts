import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const fetcher = <Data, Error>(endpoint: string) => api
  .get<Data>(endpoint)
  .then((response) => response.data)
  .catch<Error>((error) => error);

// @TODO Error info
// https://swr.vercel.app/docs/error-handling#status-code-and-error-object
