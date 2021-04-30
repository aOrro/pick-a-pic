import styled from 'styled-components';
import { ReactComponent as PhotoIcon } from '../../assets/images/photo-icon.svg';
import { ReactComponent as CollectionsIcon } from '../../assets/images/collections-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/images/user-icon.svg';

export const Container = styled.div`
  width: 55%;
  margin: 100px auto;
`;

export const SearchInfo = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const SearchTabs = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  padding: 5px 0;
  border-bottom: 1px solid lightgrey;

  li {
    display: flex;
    align-items: center;
    margin-right: 50px;
    font-size: 16px;
  }
`;

export const StyledPhotoIcon = styled(PhotoIcon)`
  margin-right: 5px;
  padding-top: 3px;
`;

export const StyledCollectionsIcon = styled(CollectionsIcon)`
  margin-right: 5px;
`;

export const StyledUserIcon = styled(UserIcon)`
  margin-right: 5px;
`;
