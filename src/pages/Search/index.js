import React from 'react';
import SearchResultsPhotos from '../../components/SearchResultsPhotos';
import SearchResultsCollections from '../../components/SearchResultsCollections';
import SearchResultsUsers from '../../components/SearchResultsUsers';
import {
  Container,
  SearchInfo,
  SearchTabs,
  StyledPhotoIcon,
  StyledCollectionsIcon,
  StyledUserIcon,
} from './styles';

class Search extends React.Component {
  state = {
    dataToDisplay: '',
  };

  handleClick = chosenData => {
    this.setState({
      dataToDisplay: chosenData,
    });
  };

  renderChosenTab = () => {
    switch (this.state.dataToDisplay) {
      case 'collections':
        return <SearchResultsCollections />;
      case 'users':
        return <SearchResultsUsers />;
      default:
        return <SearchResultsPhotos />;
    }
  };

  render() {
    return (
      <Container>
        <SearchInfo>
          <i>
            Results for "<strong>{this.props.match.params.searchTerm}</strong>"
          </i>
        </SearchInfo>
        <SearchTabs>
          <li onClick={() => this.handleClick('photos')}>
            <StyledPhotoIcon />
            Photos
          </li>
          <li onClick={() => this.handleClick('collections')}>
            <StyledCollectionsIcon />
            Collections
          </li>
          <li onClick={() => this.handleClick('users')}>
            <StyledUserIcon />
            Users
          </li>
        </SearchTabs>
        {this.renderChosenTab()}
      </Container>
    );
  }
}

export default Search;
