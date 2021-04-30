import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import PhotoModal from '../PhotoModal';
import { Container, StyledPhoto } from './styles';

class UserPhotos extends React.Component {
  state = {
    userPhotos: [],
    isLoading: false,
    index: null,
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

  handlePhotoClick = photoIndex => {
    this.setState({
      index: photoIndex,
    });
  };

  handleCloseClick = () => {
    this.setState({
      index: null,
    });
  };

  componentDidMount() {
    this.getUserPhotos();
  }

  render() {
    const { index, userPhotos, isLoading } = this.state;
    const readyToDisplay = !isLoading && userPhotos.length > 0;
    const showModal = index === 0 || index > 0;

    return (
      <Container>
        {isLoading && <div>Loading photos...</div>}
        {readyToDisplay &&
          userPhotos.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.small}
                alt={item.alt_description}
                key={item.id}
                onClick={() => this.handlePhotoClick(index)}
              />
            );
          })}
        {showModal && (
          <PhotoModal
            index={index}
            arrayOfPhotos={userPhotos}
            handleCloseClick={this.handleCloseClick}
          />
        )}
      </Container>
    );
  }
}

export default withRouter(UserPhotos);
