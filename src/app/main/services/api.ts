import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3333',
});

const get = <Data>(endpoint: string): Promise<Data> => instance
  .get<Data>(endpoint)
  .then((response) => response.data)
  .catch((error) => error);

const post = <Data>(endpoint: string, data: unknown): Promise<Data> => instance
  .post<Data>(endpoint, data)
  .then((response) => response.data)
  .catch((error) => error);

const put = <Data>(endpoint: string, data: unknown): Promise<Data> => instance
  .put<Data>(endpoint, data)
  .then((response) => response.data)
  .catch((error) => error);

const del = <Data>(endpoint: string): Promise<Data> => instance
  .delete<Data>(endpoint)
  .then((response) => response.data)
  .catch((error) => error);

export const api = {
  get,
  post,
  put,
  del,
};

// @TODO Melhorar a tipagem do axios
// @TODO Error info
// https://swr.vercel.app/docs/error-handling#status-code-and-error-object
