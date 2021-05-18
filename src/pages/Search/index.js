import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchResultsPhotos from '../../components/SearchResultsPhotos';
import SearchResultsCollections from '../../components/SearchResultsCollections';
import SearchResultsUsers from '../../components/SearchResultsUsers';

import {
  handleTabClick,
  clearDataForNewSearch,
} from '../../store/search/searchActions';

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

  /*   componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    )
      this.props.clearDataForNewSearch();
  } */

  render() {
    const { searchTerm } = this.props.match.params;

    return (
      <Container>
        <SearchInfo>
          <i>
            Results for "<strong>{searchTerm}</strong>"
          </i>
        </SearchInfo>
        <SearchTabs>
          {/* <Link to={`/search/photos/${searchTerm}`}> */}
          <li onClick={() => this.props.handleTabClick('photos', searchTerm)}>
            <StyledPhotoIcon />
            Photos
          </li>
          {/*           </Link>
          <Link to={`/search/collections/${searchTerm}`}> */}
          <li
            onClick={() => this.props.handleTabClick('collections', searchTerm)}
          >
            <StyledCollectionsIcon />
            Collections
          </li>
          {/*           </Link>
          <Link to={`/search/users/${searchTerm}`}> */}
          <li onClick={() => this.props.handleTabClick('users', searchTerm)}>
            <StyledUserIcon />
            Users
          </li>
          {/* </Link> */}
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
  clearDataForNewSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
