import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Container, StyledPhoto } from './styles';

class UserPhotos extends React.Component {
  state = {
    userPhotos: [],
    isLoading: false,
  };

  getUserPhotos = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/photos?page=1&per_page=10&order_by=latest&stats=false&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userPhotos: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUserPhotos();
  }

  render() {
    const { userPhotos, isLoading } = this.state;

    const readyToDisplay = !isLoading && userPhotos.length > 0;

    return (
      <Container>
        {isLoading && <div>Loading photos...</div>}
        {readyToDisplay &&
          userPhotos.map(photo => {
            return (
              <StyledPhoto
                src={photo.urls.small}
                alt={photo.alt_description}
                key={photo.id}
              />
            );
          })}
      </Container>
    );
  }
}

export default withRouter(UserPhotos);
