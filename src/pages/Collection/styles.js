import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 55%;
  margin: 85px auto 0 auto;
`;

export const SearchTabs = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  padding: 5px 0;
  border-bottom: 1px solid ${props => props.theme.borders};

  li {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.secondary};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
