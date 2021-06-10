import styled from 'styled-components';
import { ReactComponent as LocationIcon } from '../../assets/images/location-icon.svg';
import { ReactComponent as WwwIcon } from '../../assets/images/www-icon.svg';

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  margin: 0 50px;
  width: 150px;
  height: auto;
`;

export const UserMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 500px;
  max-width: 600px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    margin: 0 0 10px 0;
  }

  span {
    max-width: 600px;
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
  }
`;

export const UserStatsCount = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const StyledLocationIcon = styled(LocationIcon)`
  margin-right: 5px;
  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledWwwIcon = styled(WwwIcon)`
  margin-right: 5px;
  & path {
    fill: ${props => props.theme.secondary};
  }
`;
