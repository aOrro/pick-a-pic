import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg';
import { ReactComponent as ExploreIcon } from '../../assets/images/explore-icon.svg';
import { ReactComponent as SunIcon } from '../../assets/images/sun-icon.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/moon-icon.svg';
import logoImage from '../../assets/images/logo-project.png';
import { Container, HeaderMenu, NavLinks, LinksList, Logo } from './styles';

class NavBar extends React.Component {
  state = {
    searchValue: '',
    lightTheme: true,
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/photos/${this.state.searchValue}`);
    this.setState({
      searchValue: '',
    });
  };

  handleThemeClick = () => {
    this.setState({
      lightTheme: !this.state.lightTheme,
    });
  };

  render() {
    return (
      <Container>
        <HeaderMenu>
          <div>
            <Logo src={logoImage} alt='Pick a pic logo' />
          </div>
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.searchValue}
          />
          <NavLinks>
            <LinksList>
              <li>
                <Link to='/'>
                  <HomeIcon />
                </Link>
              </li>
              <li>
                <Link to='/explore'>
                  <ExploreIcon />
                </Link>
              </li>
              <li onClick={this.handleThemeClick}>
                {this.state.lightTheme ? <MoonIcon /> : <SunIcon />}
              </li>
            </LinksList>
          </NavLinks>
        </HeaderMenu>
      </Container>
    );
  }
}

export default withRouter(NavBar);
