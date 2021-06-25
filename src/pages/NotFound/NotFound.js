import { Link } from 'react-router-dom';

import { StyledDiv, StyledIFrame } from './NotFound.styles';

const NotFound = () => {
  return (
    <StyledDiv>
      <StyledIFrame
        src='https://giphy.com/embed/RjoLWhQBFEcHS'
        frameBorder='0'
        class='giphy-embed'
        allowFullScreen
      ></StyledIFrame>
      <div>
        <h1>404 - Page not found</h1>
        <p>
          I couldn't find that page but I found{' '}
          <Link to={'/search/photos/programming'}>my passion</Link>!
        </p>
      </div>
    </StyledDiv>
  );
};

export default NotFound;
