import React from 'react';
import axios from 'axios';
import { SearchResultsPhotos } from '../../components/SearchResultsPhotos';
import { SearchResultsCollections } from '../../components/SearchResultsCollections';
import { SearchResultsUsers } from '../../components/SearchResultsUsers';
import photoIcon from '../../assets/images/photo-icon.png';
import collectionIcon from '../../assets/images/collection-icon.png';
import userIcon from '../../assets/images/user-logo.png';
import { Container, SearchTabs, Icon } from './styles';

class Search extends React.Component {
  state = {
    photosData: [],
    collectionsData: [],
    usersData: [],
    showPhotos: true,
    showCollections: false,
    showUsers: false,
    isLoadingPhotos: false,
    isLoadingCollections: false,
    isLoadingUsers: false,
  };

  getSearchPhotos = async () => {
    try {
      this.setState({
        isLoadingPhotos: true,
      });

      const { data } = await axios(
        `https://api.unsplash.com/search/photos?page=1&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );

      this.setState({
        photosData: data.results,
        showPhotos: true,
        showCollections: false,
        showUsers: false,
        isLoadingPhotos: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getSearchCollections = async () => {
    try {
      this.setState({
        isLoadingCollections: true,
      });

      const { data } = await axios(
        `https://api.unsplash.com/search/collections?page=1&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );

      this.setState({
        collectionsData: data.results,
        showPhotos: false,
        showCollections: true,
        showUsers: false,
        isLoadingCollections: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getSearchUsers = async () => {
    try {
      this.setState({
        isLoadingUsers: true,
      });

      const { data } = await axios(
        `https://api.unsplash.com/search/users?page=1&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );

      this.setState({
        usersData: data.results,
        showPhotos: false,
        showCollections: false,
        showUsers: true,
        isLoadingUsers: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSearchPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad) this.getSearchPhotos();
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    )
      this.getSearchPhotos();
  }

  render() {
    return (
      <Container>
        <SearchTabs>
          <li onClick={this.getSearchPhotos}>
            <Icon src={photoIcon} alt='photos' />
            Photos
          </li>
          <li onClick={this.getSearchCollections}>
            <Icon src={collectionIcon} alt='collections' />
            Collections
          </li>
          <li onClick={this.getSearchUsers}>
            <Icon src={userIcon} alt='users' />
            Users
          </li>
        </SearchTabs>
        <SearchResultsPhotos {...this.state} />
        <SearchResultsCollections {...this.state} />
        <SearchResultsUsers {...this.state} />
      </Container>
    );
  }
}

export default Search;
