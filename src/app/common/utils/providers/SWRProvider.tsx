import * as React from 'react';
import { Toast } from '@geist-ui/react/dist/use-toasts/use-toast';
import { useToasts } from '@geist-ui/react';
import { AxiosError } from 'axios';
import { Revalidator, SWRConfig } from 'swr';
import { Configuration, RevalidatorOptions } from 'swr/dist/types';

function handleLoadingSlow(setToaster: (toast: Toast) => void) {
  setToaster({ text: 'We are looking for the data, hang in there 🧐.' });
}

function handleError(setToaster: (toast: Toast) => void, error: AxiosError) {
  if (error.code === '401' || error.code === '403') {
    setToaster({ text: 'Oops, you are not authorized to access the content 🧐.', type: 'error' });
  }
  if (error.code === '404') {
    setToaster({ text: "We didn't find what you were looking for 😟.", type: 'error' });
  }
}

function handleErrorRetry(
  setToaster: (toast: Toast) => void,
  error: AxiosError,
  revalidate: Revalidator,
  config: Required<Configuration>,
  options: Required<RevalidatorOptions>,
) {
  if (error.code === '401' || error.code === '403' || error.code === '404') {
    return;
  }
  if (options.retryCount >= config.errorRetryCount) {
    setToaster({ text: "We didn't find what you were looking for 😟.", type: 'error' });
    return;
  }
  if (options.retryCount === 1) {
    setToaster({ text: 'We were unable to find the data, trying again in 5 seconds 😅.' });
  }
  if (options.retryCount === 2) {
    setToaster({ text: 'We were unable to find the data, trying one more time 🧐.' });
  }
  setTimeout(() => revalidate({ retryCount: options.retryCount }), config.errorRetryInterval);
}

type SWRProviderProps = {
  children: React.ReactNode
};

export const SWRProvider = (props: SWRProviderProps) => {
  const { children } = props;
  const [, setToast] = useToasts();

  return (
    <SWRConfig value={{
      loadingTimeout: 5000,
      dedupingInterval: 60000,
      errorRetryCount: 3,
      errorRetryInterval: 5000,
      shouldRetryOnError: true,
      focusThrottleInterval: 60000,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      onLoadingSlow: () => handleLoadingSlow(setToast),
      onError: (error) => handleError(setToast, error),
      onErrorRetry: (error, _, config, revalidate, options) => (
        handleErrorRetry(setToast, error, revalidate, config, options)
      ),
    }}
    >
      {children}
    </SWRConfig>
  );
};

// @TODO Melhorar a tipagem do error
// https://swr.vercel.app/docs/error-handling
// setToaster({ text: 'Oops, there was some unexpected error, try again later .', type: 'error' });
// });
