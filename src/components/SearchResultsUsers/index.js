import { UserPreviewCard } from '../UserPreviewCard';
import { Container } from './styles';

export const SearchResultsUsers = ({
  usersData,
  showUsers,
  isLoadingUsers,
}) => {
  const showData = !isLoadingUsers && usersData.length > 0 && showUsers;

  return (
    <Container>
      {isLoadingUsers && <div>Loading photos...</div>}
      {showData &&
        usersData.map(user => {
          return <UserPreviewCard userInfo={user} key={user.id} />;
        })}
    </Container>
  );
};
