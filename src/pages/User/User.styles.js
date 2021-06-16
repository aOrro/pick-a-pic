import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 85px auto 0 auto;
`;

export const ContentContainer = styled.div`
  width: 55%;
  margin: 100px auto;

  ul {
    width: 100%;
    display: flex;
    list-style: none;
    padding: 5px 0;
    border-bottom: 1px solid ${props => props.theme.borders};
  }

  li {
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.third};
  text-decoration: none;

  &:active,
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;
