export const UserHeader = props => {
  const userInfo = props.userInfo;

  return (
    <div>
      <div>
        <img
          src={userInfo && userInfo.profile_image.large}
          alt='img description'
        />
      </div>
      <div>
        <h2>{userInfo && userInfo.name}</h2>
        <span>{userInfo && userInfo.username}</span>
        <span>{userInfo && userInfo.bio}</span>
        <span>{userInfo && userInfo.location}</span>
        <span>{userInfo && userInfo.total_photos} Photos</span>
        <span>{userInfo && userInfo.followers_count} Followers</span>
        <span>{userInfo && userInfo.following_count} Following</span>
      </div>
    </div>
  );
};
