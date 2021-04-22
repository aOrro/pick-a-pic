import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { CollectionCard } from '../CollectionCard';
import { Container } from './styles';

class UserCollections extends React.Component {
  state = {
    userCollections: [],
    isLoading: false,
  };

  getUserCollections = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/collections?page=1&per_page=10&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userCollections: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUserCollections();
  }

  render() {
    const { userCollections, isLoading } = this.state;

    const readyToDisplay = !isLoading && userCollections.length > 0;

    return (
      <Container>
        {isLoading && <div>Loading collections...</div>}
        {readyToDisplay &&
          userCollections.map(item => {
            return <CollectionCard data={item} key={item.id} />;
          })}
      </Container>
    );
  }
}

export default withRouter(UserCollections);
