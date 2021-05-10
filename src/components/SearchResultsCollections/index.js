import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import CollectionPreviewCard from '../CollectionPreviewCard';
import { Container } from './styles';

class SearchResultsCollections extends React.Component {
  state = {
    collectionsData: [],
    pageToLoad: 1,
    hasMore: true,
  };

  getSearchCollections = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/search/collections?page=${this.state.pageToLoad}&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? this.setState({
            collectionsData: [...this.state.collectionsData, ...data.results],
          })
        : this.setState({ hasMore: false });
    } catch (error) {
      console.log(error);
    }
  };

  getMoreData = () => {
    this.setState({ pageToLoad: this.state.pageToLoad + 1 });
  };

  componentDidMount() {
    this.getSearchCollections();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.setState({ collectionsData: [] });
      this.getSearchCollections();
    }

    if (prevState.pageToLoad !== this.state.pageToLoad)
      this.getSearchCollections();
  }

  render() {
    const { collectionsData } = this.state;

    return (
      <Container>
        <InfiniteScroll
          dataLength={collectionsData.length}
          next={this.getMoreData}
          hasMore={this.state.hasMore}
          loader={<div>Loading photos...</div>}
        >
          {collectionsData.map(item => {
            return <CollectionPreviewCard data={item} key={item.id} />;
          })}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default withRouter(SearchResultsCollections);
