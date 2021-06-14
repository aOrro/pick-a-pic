import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { SearchBar } from 'components';

import logoImage from '../../assets/images/logo-project.png';
import lightLogoImage from '../../assets/images/logo-light.png';

import { handleThemeChange } from 'store/settings';

import {
  Container,
  HeaderMenu,
  NavLinks,
  LinksList,
  Logo,
  LightLogo,
  StyledHomeIcon,
  StyledExploreIcon,
  StyledSunIcon,
  StyledMoonIcon,
} from './NavBar.styles';

const NavBar = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => setSearchValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/search/photos/${searchValue}`);
    setSearchValue('');
  };

  return (
    <Container>
      <HeaderMenu>
        <div>
          {props.settings.lightTheme ? (
            <Logo src={logoImage} alt='Pick a pic logo' />
          ) : (
            <LightLogo src={lightLogoImage} alt='Pick a pic logo' />
          )}
        </div>
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={searchValue}
        />
        <NavLinks>
          <LinksList>
            <li>
              <Link to='/'>
                <StyledHomeIcon />
              </Link>
            </li>
            <li>
              <Link to='/explore'>
                <StyledExploreIcon />
              </Link>
            </li>
            <li onClick={props.handleThemeChange}>
              {props.settings.lightTheme ? (
                <StyledMoonIcon />
              ) : (
                <StyledSunIcon />
              )}
            </li>
          </LinksList>
        </NavLinks>
      </HeaderMenu>
    </Container>
  );
};

const mapStateToProps = state => ({
  settings: state.settings,
});

const mapDispatchToProps = {
  handleThemeChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
