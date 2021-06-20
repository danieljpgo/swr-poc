import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ErrorMessage from '../../common/components/ErrorMessage';
import LoadingMessage from '../../common/components/LoadingMessage';
import Button from '../../common/components/Button';
import useFetch from '../../common/utils/hooks/useFetch';
import { User } from '../../common/types/user';
import { Container, Content } from './styles';

const Details = () => {
  const history = useHistory();
  const params = useParams<{ id: string }>();

  const {
    data,
    isError,
    isLoading,
  } = useFetch<User>(`users/${params.id}`);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Content>
        <Button
          type="button"
          onClick={() => handleGoBack()}
        >
          back
        </Button>
        {!isLoading
          ? (
            <div>
              <h4>{data?.name}</h4>
              <div>{data?.email}</div>
            </div>
          )
          : (<LoadingMessage />)}
        {isError && (<ErrorMessage />)}
      </Content>
    </Container>
  );
};

export default Details;
