import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UserPreviewCard } from '../UserPreviewCard';
import { Container } from './styles';
import { withRouter } from 'react-router';

class SearchResultsUsers extends React.Component {
  state = {
    usersData: [],
    pageToLoad: 1,
    hasMore: true,
  };

  getSearchUsers = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/search/users?page=${this.state.pageToLoad}&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? this.setState({
            usersData: [...this.state.usersData, ...data.results],
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
    this.getSearchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.setState({ usersData: [] });
      this.getSearchUsers();
    }

    if (prevState.pageToLoad !== this.state.pageToLoad) this.getSearchUsers();
  }

  render() {
    const { usersData } = this.state;

    return (
      <Container>
        <InfiniteScroll
          dataLength={usersData.length}
          next={this.getMoreData}
          hasMore={this.state.hasMore}
          loader={<div>Loading photos...</div>}
        >
          {usersData.map(item => {
            return <UserPreviewCard userInfo={item} key={item.id} />;
          })}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default withRouter(SearchResultsUsers);
