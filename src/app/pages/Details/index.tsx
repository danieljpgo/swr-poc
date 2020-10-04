import React from 'react';
import useFetch from '../../common/utils/hooks/useFetch';
import { User } from '../../common/types/user';
import { Container, Content } from './styles';
import { useHistory, useParams } from 'react-router-dom';

const Details = () => {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const { data } = useFetch<User>(`users/${params.id}`);

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Content>
        <button
          type="button"
          onClick={() => handleGoBack()}
        >
          back
      </button>
        {data ?
          (<div>
            <h4>{data?.name}</h4>
            <div>{data?.email}</div>
          </div>
          ) :
          (<h3>Loading ...</h3>)
        }
      </Content>
    </Container>
  )
};

export default Details;
