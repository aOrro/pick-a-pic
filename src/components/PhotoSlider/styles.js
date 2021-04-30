import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledSlider = styled(Slider)`
  height: 100%;

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }
`;

export const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalDiv = styled.div`
  width: 80%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  top: 0;
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 20px;
`;

export const AuthorImage = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 50px;
  height: auto;
`;

export const ModalMain = styled.div``;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledModalPhoto = styled.img`
  height: 75vh;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
