export const UserHeader = ({ userInfo }) => {
  return (
    <div>
      {userInfo && (
        <div>
          <img
            src={userInfo && userInfo.profile_image.large}
            alt='img description'
          />
        </div>
      )}
      {userInfo && (
        <div>
          <h2>{userInfo.name}</h2>
          <span>{userInfo.username}</span>
          <span>{userInfo.bio}</span>
          <span>{userInfo.location}</span>
          <span>{userInfo.total_photos} Photos</span>
          <span>{userInfo.followers_count} Followers</span>
          <span>{userInfo.following_count} Following</span>
        </div>
      )}
    </div>
  );
};
