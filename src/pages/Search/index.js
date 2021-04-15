import React from 'react';
import axios from 'axios';
import { SearchBar } from '../../components/SearchBar';
import { SearchResults } from '../../components/SearchResults';

class Search extends React.Component {
  state = {
    inputValue: '',
    pageToLoad: 1,
    photosData: [],
    isLoading: false,
  };

  fetchPhotos = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { inputValue, pageToLoad, photosData } = this.state;
      const { data } = await axios(
        `https://api.unsplash.com/search/photos?page=${pageToLoad}&query=${inputValue}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        photosData: [...photosData, ...data.results],
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.inputValue}`);
    this.fetchPhotos();
  };

  handleClick = () => {
    this.setState({
      pageToLoad: this.state.pageToLoad + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageToLoad !== this.state.pageToLoad) this.fetchPhotos();
  }

  render() {
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <SearchResults
          photosData={this.state.photosData}
          isLoading={this.state.isLoading}
        />
        <button onClick={this.handleClick}>More photos</button>
      </div>
    );
  }
}

export default Search;
