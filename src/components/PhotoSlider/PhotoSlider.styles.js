import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { ReactComponent as CloseWindowIcon } from '../../assets/images/close-window-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/images/add-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/heart-icon.svg';

export const Container = styled.div`
  width: 850px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.third};
  border-radius: 10px;
`;

export const StyledSlider = styled(Slider)`
  height: 400px;
  width: 730px;
  margin: 0 auto;

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }

  .slick-arrow:before {
    color: ${props => props.theme.secondary};
    font-size: 25px;
  }

  .slick-arrow {
    width: 20px;
  }

  .slick-prev {
    z-index: 10;
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
  height: 100px;
  width: 770px;
  top: 0;
  padding: 0 20px;
  margin: 0 auto;

  span {
    color: ${props => props.theme.secondary};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 18px;
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
  height: 400px;
  border-radius: 5px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 770px;
  margin: 35px auto;
`;

export const Likes = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledHeartIcon = styled(HeartIcon)`
  margin-right: 5px;
  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledCloseWindowIcon = styled(CloseWindowIcon)`
  & path {
    fill: ${props => props.theme.secondary};
  }
`;
