import { useNavigate, useParams } from 'react-router-dom';
import {
  Page,
  Card,
  Text,
  Button,
} from '@geist-ui/react';
import { useFetch } from '../../common/utils/hooks/useFetch';
import { User } from '../../common/types/user';

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, isError, isLoading } = useFetch<User>(`users/${id}`);

  function handleGoBack() {
    navigate('..');
  }

  return (
    <Page>
      <Page.Header>
        <Button size="mini" onClick={handleGoBack}>
          back
        </Button>
      </Page.Header>
      <Page.Content>
        {!isLoading
          ? (
            <Card>
              <Card.Content>
                <Text h4>{user?.name}</Text>
              </Card.Content>
              <Card.Footer>
                <Text small>{user?.email}</Text>
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
