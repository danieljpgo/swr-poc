import React from 'react';
import { Container } from './styles';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (endpoint: string) => {
  const response = await axios.get(endpoint)

  return response;
}

const Details = () => {
  const { data } = useSWR('http://localhost:3000/users/1', fetcher)

  console.log(data);

  return (
    <Container>
      a
    </Container>
  )
};

export default Details;
