import { useHistory, useParams } from 'react-router-dom';
import {
  Page,
  Card,
  Text,
  Button,
} from '@geist-ui/react';
import { useFetch } from '../../common/utils/hooks/useFetch';
import { User } from '../../common/types/user';

const UserDetails = () => {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const { data, isError, isLoading } = useFetch<User>(`users/${params.id}`);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Page>
      <Page.Header>
        <Button
          size="mini"
          onClick={handleGoBack}
        >
          back
        </Button>
      </Page.Header>
      <Page.Content>
        {!isLoading
          ? (
            <Card>
              <Card.Content>
                <Text h4>{data?.name}</Text>
              </Card.Content>
              <Card.Footer>
                <Text small>{data?.email}</Text>
              </Card.Footer>
            </Card>
          )
          : (<Text>loading ...</Text>)}
        {isError && (
          <Text h4>
            Error on fetching that data.
            <Text p>after a few seconds, it will be tried to fetch the information again.</Text>
          </Text>
        )}
      </Page.Content>
    </Page>
  );
};

export default UserDetails;
