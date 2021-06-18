import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 55%;
  margin: 85px auto;
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
  border-bottom: 1px solid ${props => props.theme.borders};
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.third};

  &.selected {
    color: ${props => props.theme.secondary};
  }
`;
