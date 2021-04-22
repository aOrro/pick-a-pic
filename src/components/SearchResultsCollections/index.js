import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { CollectionCard } from '../CollectionCard';
import { Container } from './styles';

class SearchResultsCollections extends React.Component {
  state = {
    collectionsData: [],
    isLoading: false,
  };

  getSearchCollections = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/search/collections?page=1&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        collectionsData: data.results,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSearchCollections();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    )
      this.getSearchCollections();
  }

  render() {
    const { collectionsData, isLoading } = this.state;

    const readyToDisplay =
      !isLoading && collectionsData.length > 0 && this.props.showCollections;

    return (
      <Container>
        {isLoading && <div>Loading collections...</div>}
        {readyToDisplay &&
          collectionsData.map(item => {
            return <CollectionCard data={item} key={item.id} />;
          })}
      </Container>
    );
  }
}

export default withRouter(SearchResultsCollections);
