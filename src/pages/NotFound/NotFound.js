import { StyledDiv, StyledIFrame } from './NotFound.styles';

const NotFound = () => {
  return (
    <>
      <StyledDiv>
        <StyledIFrame
          src='https://giphy.com/embed/RjoLWhQBFEcHS'
          frameBorder='0'
          class='giphy-embed'
          allowFullScreen
        ></StyledIFrame>
      </StyledDiv>
      <p>
        <a href='https://giphy.com/gifs/RjoLWhQBFEcHS'>via GIPHY</a>
      </p>
    </>
  );
};

export default NotFound;
