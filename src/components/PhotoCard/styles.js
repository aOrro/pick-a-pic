import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PhotoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhotoCardHeader = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 18px;
`;

export const SmallProfilePicture = styled.img`
  border: 2px solid #bf0000;
  border-radius: 50%;
  margin: 10px;
`;

export const PhotoCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 50px 10px;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  margin-right: 5px;
`;
