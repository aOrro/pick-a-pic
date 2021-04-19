import React from 'react';
import axios from 'axios';
import { SearchBar } from '../../components/SearchBar';
import { SearchResultsPhotos } from '../../components/SearchResultsPhotos';
import { SearchResultsCollections } from '../../components/SearchResultsCollections';
import { SearchResultsUsers } from '../../components/SearchResultsUsers';
import photoIcon from '../../assets/images/photo-icon.png';
import collectionIcon from '../../assets/images/collection-icon.png';
import userIcon from '../../assets/images/user-logo.png';
import { Container, SearchTabs, Icon } from './styles';

class Search extends React.Component {
  state = {
    searchValue: '',
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
      const { searchValue } = this.state;
      const { data } = await axios(
        `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      console.log(data);
      this.setState({
        photosData: [...data.results],
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
      const { searchValue } = this.state;
      const { data } = await axios(
        `https://api.unsplash.com/search/collections?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      console.log('collections', data);

      this.setState({
        collectionsData: [...data.results],
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
      const { searchValue } = this.state;
      const { data } = await axios(
        `https://api.unsplash.com/search/users?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      console.log(data);

      this.setState({
        usersData: [...data.results],
        showPhotos: false,
        showCollections: false,
        showUsers: true,
        isLoadingUsers: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.searchValue}`);
    this.getSearchPhotos();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad) this.fetchPhotos();
  }

  render() {
    return (
      <Container>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.searchValue}
        />
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
