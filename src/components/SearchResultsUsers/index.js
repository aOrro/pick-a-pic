import React from 'react';
import axios from 'axios';
import { UserPreviewCard } from '../UserPreviewCard';
import { Container } from './styles';
import { withRouter } from 'react-router';

class SearchResultsUsers extends React.Component {
  state = {
    usersData: [],
    isLoading: false,
  };

  getSearchUsers = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/search/users?page=1&query=${this.props.match.params.searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        usersData: data.results,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
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

    const readyToDisplay =
      !isLoading && usersData.length > 0 && this.props.showUsers;

    return (
      <Container>
        {isLoading && <div>Loading photos...</div>}
        {readyToDisplay &&
          usersData.map(item => {
            return <UserPreviewCard userInfo={item} key={item.id} />;
          })}
      </Container>
    );
  }
}

export default withRouter(SearchResultsUsers);
