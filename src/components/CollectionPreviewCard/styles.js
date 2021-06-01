import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 5px 80px 5px;

  img {
    width: 330px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const CollectionInfo = styled.div`
  margin-left: 10px;

  h3 {
    margin: 15px 0 10px 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;

  h3 {
    max-width: 300px;
    text-overflow: ellipsis;
  }
`;

export const Labels = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Label = styled(Link)`
  background: #dcdcdc;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  text-decoration: none;
  color: #000;
`;
