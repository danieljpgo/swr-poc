import useSWR from 'swr';
import api from '../../../common/services/api';

const fetcher = async <Data,>(endpoint: string): Promise<Data> => {
  const response = await api
    .get<Data>(endpoint)
    .then((response) => response.data)

  return response;
}

const useFetch = <Data = any, Error = any>(url: string) => {
  const { data, error } = useSWR<Data, Error>(url, fetcher)

  return { data, error };

}

export default useFetch;

// isValidating, mutate, revalidate 