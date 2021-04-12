import React from 'react';
import Feed from '../../components/Feed';
import { Suggested } from '../../components/Suggested';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Feed />
        <Suggested />
      </div>
    );
  }
}

export default Home;
