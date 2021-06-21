// https://github.com/vercel/swr/issues/141
// https://twitter.com/estejs/status/1401629488643985414

import useSWR, { SWRConfiguration } from 'swr';
import { fetcher } from '../../services/api';

// type State =
// | 'idle'
// | 'pending'
// | 'success'
// | 'error'
// | 'retrying'
// | 'revalidating'
// | 'error_stale'
// | 'retrying_stale';

// function findState(data) {
//   "(data = 0, error = 0, isValidating = 0): idle
// (data = 0, error = 0, isValidating = 1): pending
// (data = 1, error = 0, isValidating = 0): success
// (data = 0, error = 1, isValidating = 0): error
// (data = 0, error = 1, isValidating = 1): retrying
// (data = 1, error = 0, isValidating = 1): revalidating
// (data = 1, error = 1, isValidating = 0): error_stale
// (data = 1, error = 1, isValidating = 1): retrying_stale"
// https://github.com/vercel/swr/issues/141#:~:text=(data%20%3D%200,1)%3A%20retrying_stale
// }

export const useFetch = <Data = unknown, Error = unknown>(
  url: string,
  config?: SWRConfiguration,
) => {
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
