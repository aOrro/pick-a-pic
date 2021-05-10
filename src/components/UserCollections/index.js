import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';
import CollectionPreviewCard from '../CollectionPreviewCard';
import { Container } from './styles';

class UserCollections extends React.Component {
  state = {
    userCollections: [],
    pageToLoad: 1,
    hasMore: true,
    isLoading: false,
  };

  getUserCollections = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/collections?page=${this.state.pageToLoad}&per_page=10&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? this.setState({
            userCollections: [...this.state.userCollections, ...data],
            isLoading: false,
          })
        : this.setState({ hasMore: false, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  getMoreData = () => {
    this.setState({ pageToLoad: this.state.pageToLoad + 1 });
  };

  componentDidMount() {
    this.getUserCollections();
  }

  render() {
    const { userCollections, isLoading } = this.state;
    const readyToDisplay = !isLoading && userCollections.length > 0;

    return (
      <Container>
        {isLoading && <div>Loading collections...</div>}
        <InfiniteScroll
          dataLength={userCollections.length}
          next={this.getMoreData}
          hasMore={this.state.hasMore}
          loader={<div>Loading photos...</div>}
        >
          {readyToDisplay &&
            userCollections.map(item => {
              return <CollectionPreviewCard data={item} key={item.id} />;
            })}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default withRouter(UserCollections);
