import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo-project.png';
import homeLogo from '../../assets/images/home-logo.png';
import searchLogo from '../../assets/images/search-logo.png';
import userLogo from '../../assets/images/user-logo.png';
import {
  Container,
  HeaderMenu,
  NavLinks,
  LinksList,
  Logo,
  Icon,
} from './styles';

export const NavBar = () => {
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
            <li>
              <Link to='/users/me'>
                <Icon src={userLogo} alt='user logo' />
              </Link>
            </li>
          </LinksList>
        </NavLinks>
      </HeaderMenu>
    </Container>
  );
};
