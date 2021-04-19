import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 15px;
  margin: 5px 0;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-bottom: 30px;

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    margin: 5px 0 0 0;
    color: #000;
  }

  span {
    color: #000;
    font-style: italic;
  }
`;

export const MainUserInfo = styled.div`
  display: flex;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid #bf0000;
`;

export const FollowIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

export const ImagesPreview = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardImagePreview = styled.img`
  width: 32%;
  height: 100px;
  object-fit: cover;
`;

export const VisitButton = styled.button`
  margin-top: 15px;
  height: 35px;
  font-size: 16px;
`;
