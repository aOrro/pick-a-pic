import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.inactiveLinks};

  &.selected {
    color: ${props => props.theme.secondary};
  }

  &:hover {
    color: ${props => props.theme.secondary};
  }
`;
