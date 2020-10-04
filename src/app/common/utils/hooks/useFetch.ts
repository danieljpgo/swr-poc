import useSWR from 'swr';
import api from '../../../common/services/api';

const fetcher = (endpoint: string) => api
  .get(endpoint)
  .then((response) => response.data);

const useFetch = <Data = any, Error = any>(url: string) => {
  const { data, error, mutate } = useSWR<Data, Error>(url, fetcher, {

  });

  return { data, error, mutate };

}

export default useFetch;

// isValidating, revalidate 