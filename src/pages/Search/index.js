import React from 'react';

import { connect } from 'react-redux';

import SearchResultsPhotos from '../../components/SearchResultsPhotos';
import SearchResultsCollections from '../../components/SearchResultsCollections';
import SearchResultsUsers from '../../components/SearchResultsUsers';

import { handleTabClick } from '../../store/search/searchActions';

import {
  Container,
  SearchInfo,
  SearchTabs,
  StyledPhotoIcon,
  StyledCollectionsIcon,
  StyledUserIcon,
} from './styles';

class Search extends React.Component {
  renderChosenTab = () => {
    switch (this.props.search.chosenTab) {
      case 'collections':
        return <SearchResultsCollections />;
      case 'users':
        return <SearchResultsUsers />;
      default:
        return <SearchResultsPhotos />;
    }
  };

  render() {
    const { searchTerm } = this.props.match.params;

    return (
      <Container>
        <SearchInfo>
          <i>
            Results for "<strong>{this.props.match.params.searchTerm}</strong>"
          </i>
        </SearchInfo>
        <SearchTabs>
          <li onClick={() => this.props.handleTabClick('photos', searchTerm)}>
            <StyledPhotoIcon />
            Photos
          </li>
          <li
            onClick={() => this.props.handleTabClick('collections', searchTerm)}
          >
            <StyledCollectionsIcon />
            Collections
          </li>
          <li onClick={() => this.props.handleTabClick('users', searchTerm)}>
            <StyledUserIcon />
            Users
          </li>
        </SearchTabs>
        {this.renderChosenTab()}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = {
  handleTabClick,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
