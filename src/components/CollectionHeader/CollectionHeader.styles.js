import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 85px 0 150px 0;
  padding-top: 100px;
`;

export const CollectionImage = styled.img`
  border-radius: 50%;
  margin: 0 50px;
  width: 140px;
  height: 140px;
  object-fit: cover;
`;

export const CollectionInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    margin: 0 0 10px 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
  }
`;

export const Labels = styled.div`
  margin-top: 20px;
`;

export const Label = styled(Link)`
  background: ${props => props.theme.third};
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: ${props => props.theme.secondary};
`;
