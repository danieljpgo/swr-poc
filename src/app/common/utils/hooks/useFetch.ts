import useSWR, { Key, SWRConfiguration } from 'swr';
import { fetcher } from '../../../main/services/api';

type SWRState =
| 'idle'
| 'pending'
| 'success'
| 'error'
| 'retrying'
| 'revalidating'
| 'error_stale'
| 'retrying_stale';

function fetchState(hasData: boolean, hasError: boolean, isValidating: boolean): SWRState {
  if (hasData && hasError && isValidating) return 'retrying_stale';
  if (hasData && hasError && !isValidating) return 'error_stale';
  if (hasData && !hasError && isValidating) return 'revalidating';
  if (!hasData && hasError && isValidating) return 'retrying';
  if (!hasData && hasError && !isValidating) return 'error';
  if (hasData && !hasError && !isValidating) return 'success';
  if (!hasData && !hasError && isValidating) return 'pending';
  return 'idle';
}

export const useFetch = <Data = unknown, Error = unknown>(
  endpoint: Key,
  config?: SWRConfiguration,
) => {
  const {
    data,
    error,
    mutate,
    revalidate,
    isValidating,
  } = useSWR<Data, Error>(endpoint, fetcher, config);

  const state: SWRState = fetchState(Boolean(data), Boolean(error), isValidating);

  return {
    data,
    error,
    state,
    mutate,
    revalidate,
  };
};

// @TODO Fazer uma seção autenticada
// @TODO exportar uma função para update todas https://swr.vercel.app/docs/mutation
// @TODO Abstration para páginação (pre-fetching)
// @TODO useSWRInfinity

// https://swr.vercel.app/docs/error-handling#error-retry

// const state = {
//   idle: 'idle',
//   pending: 'pending',
//   success: 'success',
//   error: 'error',
//   retrying: 'retrying',
//   revalidating: 'revalidating',
//   error_stale: 'error_stale',
//   retrying_stale: 'retrying_stale',
// } as const;

// (data = 0, error = 0, isValidating = 0): idle
// (data = 0, error = 0, isValidating = 1): pending
// (data = 1, error = 0, isValidating = 0): success
// (data = 0, error = 1, isValidating = 0): error
// (data = 0, error = 1, isValidating = 1): retrying
// (data = 1, error = 0, isValidating = 1): revalidating
// (data = 1, error = 1, isValidating = 0): error_stale
// (data = 1, error = 1, isValidating = 1): retrying_stale

// https://github.com/vercel/swr/issues/141
// https://twitter.com/estejs/status/1401629488643985414
