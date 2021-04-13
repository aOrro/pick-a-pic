export const UserStats = props => {
  return (
    <div>
      <h2 onClick={props.handleClick}>Stats</h2>

      {props.userStats && (
        <span>
          {props.userStats.downloads.historical.change} total downloads in the
          last 30 days
        </span>
      )}

      {props.userStats && (
        <span>
          {props.userStats.downloads.historical.average} average downloads
        </span>
      )}
    </div>
  );
};
