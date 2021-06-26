import * as React from 'react';
import { SWRConfig } from 'swr';
import { useToasts } from '@geist-ui/react';
import { Toast } from '@geist-ui/react/dist/use-toasts/use-toast';

// @TODO Melhorar a tipagem do error
function handleError(error: any, setToaster: (t: Toast) => void) {
  if (error.status !== 403 && error.status !== 404) {
    setToaster({
      text: 'Error XPT',
      type: 'error',
    });
  }
  // @TODO Tratar outras excessões
}

type SWRProviderProps = {
  children: React.ReactNode
};

export const SWRProvider = (props: SWRProviderProps) => {
  const { children } = props;
  const [, setToast] = useToasts();

  return (
    <SWRConfig value={{
      revalidateOnFocus: true,
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 5000,
      loadingTimeout: 3000,
      focusThrottleInterval: 5000,
      revalidateOnReconnect: true,
      onSuccess: () => alert('success'),
      onError: (error) => handleError(error, setToast),
      onErrorRetry: () => alert('error'),
      onLoadingSlow: () => alert('errorRetry'),
    }}
    >
      {children}
    </SWRConfig>
  );
};
