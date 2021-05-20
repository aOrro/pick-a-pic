import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const UserStats = props => {
  const { userStats, isLoadingStats } = props.user;
  const readyToDisplay = !isLoadingStats && userStats;

  return (
    <div>
      {isLoadingStats && <div>Loading stats...</div>}
      {readyToDisplay && (
        <div>
          <span>
            {userStats.downloads.historical.change} total downloads in the last
            30 days
          </span>
          <span>
            {userStats.downloads.historical.average} average downloads
          </span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withRouter(UserStats));
