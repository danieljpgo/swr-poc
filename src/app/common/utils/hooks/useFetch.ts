import useSWR, { ConfigInterface } from 'swr';
import api from '../../../common/services/api';

const fetcher = (endpoint: string) => api
  .get(endpoint)
  .then((response) => response.data);

const useFetch = <Data = any, Error = any>(url: string, config?: ConfigInterface) => {
  const {
    data,
    error,
    isValidating,
    mutate,
    revalidate
  } = useSWR<Data, Error>(url, fetcher, config);

  return {
    data,
    isError: error,
    isLoading: !error && !data,
    isValidating,
    mutate,
    revalidate,
  };
}

export default useFetch;