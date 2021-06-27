import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const fetcher = (endpoint: string) => api
  .get(endpoint)
  .then((response) => response.data)
  .catch((error) => error);

// @TODO Error info
// https://swr.vercel.app/docs/error-handling#status-code-and-error-object
