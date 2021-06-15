import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg';
import { ReactComponent as ExploreIcon } from '../../assets/images/explore-icon.svg';
import { ReactComponent as SunIcon } from '../../assets/images/sun-icon.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/moon-icon.svg';

export const Container = styled.div`
  width: 100%;
  height: 85px;
  position: fixed;
  top: 0;
  background: ${props => props.theme.main};
  z-index: 1;
  box-shadow: 0 1px 8px -1px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid ${props => props.theme.borders};
`;

export const HeaderMenu = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 55%;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: auto 0;
  width: 20%;
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100px;
`;

export const Logo = styled.img`
  width: 80px;
  margin-right: 120px;
  cursor: pointer;
`;

export const LightLogo = styled.img`
  width: 80px;
  margin-right: 120px;
  cursor: pointer;
`;

export const StyledHomeIcon = styled(HomeIcon)`
  margin-top: 5px;
  cursor: pointer;

  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledExploreIcon = styled(ExploreIcon)`
  margin-top: 6px;
  cursor: pointer;

  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledSunIcon = styled(SunIcon)`
  margin-top: 5px;
  cursor: pointer;
`;

export const StyledMoonIcon = styled(MoonIcon)`
  margin-top: 5px;
  cursor: pointer;
`;
