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
        <SearchTabs>
          <li onClick={() => this.handleClick('photos')}>
            <Icon src={photoIcon} alt='photos' />
            Photos
          </li>
          <li onClick={() => this.handleClick('collections')}>
            <Icon src={collectionIcon} alt='collections' />
            Collections
          </li>
          <li onClick={() => this.handleClick('users')}>
            <Icon src={userIcon} alt='users' />
            Users
          </li>
        </SearchTabs>
        {this.renderChosenTab()}
      </Container>
    );
  }
}

export default Search;
