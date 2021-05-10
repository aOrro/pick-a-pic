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
    isLoading: false,
  };

  getSearchUsers = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/search/users?page=${this.state.pageToLoad}&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? this.setState({
            usersData: [...this.state.usersData, ...data.results],
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
    this.getSearchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    )
      this.getSearchUsers();
  }

  render() {
    const { usersData, isLoading } = this.state;
    const readyToDisplay = !isLoading && usersData.length > 0;

    return (
      <Container>
        {isLoading && <div>Loading photos...</div>}
        <InfiniteScroll
          dataLength={usersData.length}
          next={this.getMoreData}
          hasMore={this.state.hasMore}
          loader={<div>Loading photos...</div>}
        >
          {readyToDisplay &&
            usersData.map(item => {
              return <UserPreviewCard userInfo={item} key={item.id} />;
            })}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default withRouter(SearchResultsUsers);
