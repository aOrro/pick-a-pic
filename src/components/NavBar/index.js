import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header>
      <div>LogoSVG</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/search'>Search</Link>
          </li>
          <li>
            <Link to='/users/:id'>User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
