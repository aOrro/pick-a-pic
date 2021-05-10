import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import PhotoModal from '../PhotoModal';
import { Container, StyledPhoto } from './styles';

class SearchResultsPhotos extends React.Component {
  state = {
    photosData: [],
    pageToLoad: 1,
    hasMore: true,
    isLoading: false,
    index: -1,
  };

  getSearchPhotos = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/search/photos?page=${this.state.pageToLoad}&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? this.setState({
            photosData: [...this.state.photosData, ...data.results],
            isLoading: false,
          })
        : this.setState({ hasMore: false, isLoading: false });
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
    this.getSearchPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.getSearchPhotos();
    }
  }

  render() {
    const { index, photosData, isLoading } = this.state;
    const readyToDisplay = !isLoading && photosData.length > 0;
    const showModal = index > -1;

    return (
      <Container>
        {isLoading && <div>Loading photos...</div>}
        <InfiniteScroll
          dataLength={photosData.length}
          next={this.getMoreData}
          hasMore={this.state.hasMore}
          loader={<div>Loading photos...</div>}
        >
          {readyToDisplay &&
            photosData.map((item, index) => {
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
            arrayOfPhotos={photosData}
            handleCloseClick={this.handleCloseClick}
          />
        )}
      </Container>
    );
  }
}

export default withRouter(SearchResultsPhotos);
