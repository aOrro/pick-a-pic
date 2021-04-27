import React from 'react';
import SearchResultsPhotos from '../../components/SearchResultsPhotos';
import SearchResultsCollections from '../../components/SearchResultsCollections';
import SearchResultsUsers from '../../components/SearchResultsUsers';
import { ReactComponent as PhotoIcon } from '../../assets/images/photo-icon.svg';
import { ReactComponent as CollectionsIcon } from '../../assets/images/collections-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg';
import { Container, SearchTabs } from './styles';

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
            <PhotoIcon />
            Photos
          </li>
          <li onClick={() => this.handleClick('collections')}>
            <CollectionsIcon />
            Collections
          </li>
          <li onClick={() => this.handleClick('users')}>
            <UserIcon />
            Users
          </li>
        </SearchTabs>
        {this.renderChosenTab()}
      </Container>
    );
  }
}

export default Search;
