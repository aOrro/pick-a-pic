import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo-project.png';
import homeLogo from '../../assets/images/home-logo.png';
import searchLogo from '../../assets/images/search-logo.png';
import {
  Container,
  HeaderMenu,
  NavLinks,
  LinksList,
  Logo,
  Icon,
} from './styles';
import React from 'react';

class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <HeaderMenu>
          <div>
            <Logo src={logoImage} alt='Pick a pic logo' />
          </div>
          <NavLinks>
            <LinksList>
              <li>
                <Link to='/'>
                  <Icon src={homeLogo} alt='home logo' />
                </Link>
              </li>
              <li>
                <Link to='/search'>
                  <Icon src={searchLogo} alt='search logo' />
                </Link>
              </li>
            </LinksList>
          </NavLinks>
        </HeaderMenu>
      </Container>
    );
  }
}

export default NavBar;
