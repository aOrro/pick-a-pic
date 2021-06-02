import React from 'react';
import Feed from '../../components/Feed';
import Featured from '../../components/Featured';
import { Container } from './styles';

const Home = props => {
  return (
    <Container>
      <Feed />
      <Featured />
    </Container>
  );
};

export default Home;
