import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class UserStats extends React.Component {
  state = {
    userStats: null,
    isLoading: false,
  };

  getUserStats = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios(
        `https://api.unsplash.com/users/${this.props.match.params.userName}/statistics?client_id=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        userStats: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getUserStats();
  }

  render() {
    const { userStats, isLoading } = this.state;

    const readyToDisplay = !isLoading && userStats;

    return (
      <div>
        {isLoading && <div>Loading stats...</div>}
        {readyToDisplay && (
          <div>
            <span>
              {userStats.downloads.historical.change} total downloads in the
              last 30 days
            </span>
            <span>
              {userStats.downloads.historical.average} average downloads
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(UserStats);
