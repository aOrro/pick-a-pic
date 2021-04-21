import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
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

class NavBar extends React.Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.searchValue}`);
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

export default withRouter(NavBar);
