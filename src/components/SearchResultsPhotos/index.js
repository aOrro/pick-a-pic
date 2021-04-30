import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import PhotoModal from '../PhotoModal';
import { Container, StyledPhoto } from './styles';

class SearchResultsPhotos extends React.Component {
  state = {
    photosData: [],
    isLoading: false,
    index: null,
  };

  getSearchPhotos = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/search/photos?page=1&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        photosData: data.results,
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
    this.getSearchPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    )
      this.getSearchPhotos();
  }

  render() {
    const { index, photosData, isLoading } = this.state;
    const readyToDisplay = !isLoading && photosData.length > 0;
    const showModal = index === 0 || index > 0;

    return (
      <Container>
        {isLoading && <div>Loading photos...</div>}
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
