import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import PhotoModal from '../PhotoModal';
import { Container, StyledPhoto } from './styles';

class UserPhotos extends React.Component {
  state = {
    userPhotos: [],
    pageToLoad: 1,
    hasMore: true,
    index: -1,
  };

  getUserPhotos = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/photos?page=${this.state.pageToLoad}&per_page=10&order_by=latest&stats=false&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? this.setState({
            userPhotos: [...this.state.userPhotos, ...data],
          })
        : this.setState({ hasMore: false });
    } catch (error) {
      console.log(error);
    }
  };

  getMoreData = () => {
    this.setState({ pageToLoad: this.state.pageToLoad + 1 });
  };

  handlePhotoClick = index => {
    this.setState({ index });
  };

  handleCloseClick = () => {
    this.setState({
      index: -1,
    });
  };

  componentDidMount() {
    this.getUserPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad) this.getUserPhotos();
  }

  render() {
    const { index, userPhotos } = this.state;
    const showModal = index > -1;

    return (
      <Container>
        <InfiniteScroll
          dataLength={userPhotos.length}
          next={this.getMoreData}
          hasMore={this.state.hasMore}
          loader={<div>Loading photos...</div>}
        >
          {userPhotos.map((item, index) => {
            return (
              <StyledPhoto
                src={item.urls.small}
                alt={item.alt_description}
                key={item.id}
                onClick={() => this.handlePhotoClick(index)}
              />
            );
          })}
        </InfiniteScroll>
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
