import React from 'react';

import { Feed, Featured } from 'components';

import { Container } from './Home.styles';

const Home = props => {
  return (
    <Container>
      <Feed />
      <Featured />
    </Container>
  );
};

export default Home;
