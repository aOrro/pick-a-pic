import React from 'react';
import Feed from '../../components/Feed';
import Featured from '../../components/Featured';
import { Container } from './styles';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Feed />
        <Featured />
      </Container>
    );
  }
}

export default Home;
