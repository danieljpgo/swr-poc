import { useNavigate, useParams } from 'react-router-dom';
import {
  Card, Text, Button, Spinner,
} from '@geist-ui/react';
import { useUserDetails } from '../../main/services/hooks';

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, state } = useUserDetails(id);

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div style={{ display: 'grid', placeContent: 'center' }}>
      <Button size="mini" onClick={handleGoBack}>
        back
      </Button>
      <Card>
        <Card.Content>
          <Text h4>{state === 'pending' ? <Spinner /> : user?.name}</Text>
        </Card.Content>
        <Card.Content>
          <Text small>{state === 'pending' ? <Spinner /> : user?.email}</Text>
        </Card.Content>
      </Card>
      {state === 'error' && (
        <Text h4>
          Error on fetching that data.
          <Text p>
            after a few seconds, it will be tried to fetch the information
            again.
          </Text>
        </Text>
      )}
    </div>
  );
};

export default UserDetails;
