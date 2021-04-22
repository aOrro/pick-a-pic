import React from 'react';
import SearchResultsPhotos from '../../components/SearchResultsPhotos';
import SearchResultsCollections from '../../components/SearchResultsCollections';
import SearchResultsUsers from '../../components/SearchResultsUsers';
import photoIcon from '../../assets/images/photo-icon.png';
import collectionIcon from '../../assets/images/collection-icon.png';
import userIcon from '../../assets/images/user-logo.png';
import { Container, SearchTabs, Icon } from './styles';

class Search extends React.Component {
  state = {
    showPhotos: true,
    showCollections: false,
    showUsers: false,
  };

  handlePhotosClick = () => {
    this.setState({
      showPhotos: true,
      showCollections: false,
      showUsers: false,
    });
  };

  handleCollectionsClick = () => {
    this.setState({
      showPhotos: false,
      showCollections: true,
      showUsers: false,
    });
  };

  handleUsersClick = () => {
    this.setState({
      showPhotos: false,
      showCollections: false,
      showUsers: true,
    });
  };

  render() {
    return (
      <Container>
        <SearchTabs>
          <li onClick={this.handlePhotosClick}>
            <Icon src={photoIcon} alt='photos' />
            Photos
          </li>
          <li onClick={this.handleCollectionsClick}>
            <Icon src={collectionIcon} alt='collections' />
            Collections
          </li>
          <li onClick={this.handleUsersClick}>
            <Icon src={userIcon} alt='users' />
            Users
          </li>
        </SearchTabs>
        <SearchResultsPhotos showPhotos={this.state.showPhotos} />
        <SearchResultsCollections
          showCollections={this.state.showCollections}
        />
        <SearchResultsUsers showUsers={this.state.showUsers} />
      </Container>
    );
  }
}

export default Search;
