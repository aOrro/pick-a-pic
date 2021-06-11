import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/images/heart-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/images/add-icon.svg';

export const PhotoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-bottom: 50px;
  border: 1px solid ${props => props.theme.borders};
  border-radius: 5px;
  background: ${props => props.theme.cardBackground};
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25),
    0 1px 3px -1px rgba(0, 0, 0, 0.3);
`;

export const PhotoCardHeader = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.secondary};
  font-size: 18px;
  margin: 5px 0;
`;

export const SmallProfilePicture = styled.img`
  border-radius: 50%;
  margin: 10px;
`;

export const PhotoCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 10px;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
`;

export const StyledHeartIcon = styled(HeartIcon)`
  margin-right: 5px;
  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  & path {
    fill: ${props => props.theme.secondary};
  }
`;
