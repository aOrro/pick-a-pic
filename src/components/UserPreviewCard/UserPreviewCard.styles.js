import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-image: url(${props => props.src});
  background-size: cover;
  margin-bottom: 50px;
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25),
    0 1px 3px -1px rgba(0, 0, 0, 0.3);
`;

export const ShadeDiv = styled.div`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 10%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  line-height: 30px;

  &:hover {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(153, 153, 153, 0.4990371148459384) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    cursor: pointer;
    text-decoration: underline ${props => props.theme.main};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  h3 {
    margin: 5px 0;
    color: #efefef;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto;
    max-width: 180px;
    font-size: 20px;
  }

  span {
    font-style: italic;
    color: #efefef;
  }
`;

export const MainUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
`;
