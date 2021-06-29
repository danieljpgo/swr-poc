import { useNavigate, useParams } from 'react-router-dom';
import {
  Text,
  Button,
  Spinner,
  Fieldset,
  Divider,
  Spacer,
} from '@geist-ui/react';
import { useUserDetails } from '../../main/services/hooks';

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, state } = useUserDetails(id);

  function handleGoBack() {
    navigate('..');
  }

  return (
    <div style={{
      display: 'grid',
      height: '100vh',
      placeContent: 'center',
      gridAutoRows: 'min-content',
      gridTemplateColumns: '532px',
    }}
    >
      <div style={{ minHeight: '243.61px' }}>
        <Button style={{ width: 'min-content' }} size="small" onClick={handleGoBack}>
          back
        </Button>
        <Spacer />
        {state === 'error' ? (
          <Fieldset>
            <Fieldset.Content>
              <Fieldset.Title>Error on fetching data.</Fieldset.Title>
            </Fieldset.Content>
            <Divider y={0} />
            <Fieldset.Content>
              <Text p>
                After a few seconds, it will be tried to fetch the information
                again.
              </Text>
            </Fieldset.Content>
          </Fieldset>
        ) : (
          <Fieldset>
            <Fieldset.Content>
              <Fieldset.Title>{state === 'pending' ? <Spinner style={{ minHeight: '30px' }} /> : user?.name}</Fieldset.Title>
            </Fieldset.Content>
            <Divider y={0} />
            <Fieldset.Content>
              {state === 'pending' ? <Spinner /> : <Text p>BIO</Text>}
            </Fieldset.Content>
            <Fieldset.Footer>
              {state === 'pending' ? <Spinner /> : <Text small>{user?.email}</Text>}
            </Fieldset.Footer>
          </Fieldset>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
