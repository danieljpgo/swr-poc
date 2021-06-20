import useSWR, { SWRConfiguration } from 'swr';
import api from '../../services/api';

const fetcher = (endpoint: string) => api
  .get(endpoint)
  .then((response) => response.data);

const useFetch = <Data = unknown, Error = unknown>(url: string, config?: SWRConfiguration) => {
  const {
    data,
    error,
    isValidating,
    mutate,
    revalidate,
  } = useSWR<Data, Error>(url, fetcher, config);

  return {
    data,
    isError: error,
    isLoading: !error && !data,
    isValidating,
    mutate,
    revalidate,
  };
};

export default useFetch;
