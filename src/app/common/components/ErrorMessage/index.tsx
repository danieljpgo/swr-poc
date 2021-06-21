import { Text } from '@geist-ui/react';

const ErrorMessage = () => (
  <Text h4>
    Error on fetching that data.
    <Text p>after a few seconds, it will be tried to fetch the information again.</Text>
  </Text>
);

export default ErrorMessage;
