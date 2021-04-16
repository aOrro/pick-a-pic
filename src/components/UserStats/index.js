export const UserStats = props => {
  const showData = props.userStats && props.showStats && !props.isLoading;

  return (
    <div>
      {props.isLoading && <div>Loading stats...</div>}
      {showData && (
        <div>
          {props.userStats && (
            <span>
              {props.userStats.downloads.historical.change} total downloads in
              the last 30 days
            </span>
          )}

          {props.userStats && (
            <span>
              {props.userStats.downloads.historical.average} average downloads
            </span>
          )}
        </div>
      )}
    </div>
  );
};
