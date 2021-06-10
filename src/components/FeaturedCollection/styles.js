import styled from 'styled-components';
import Slider from 'react-slick';
import { ReactComponent as BinIcon } from '../../assets/images/bin-icon.svg';

export const Container = styled.div`
  margin-bottom: 10px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;

  h4 {
    margin-bottom: 15px;
  }
`;

export const StyledBinIcon = styled(BinIcon)`
  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledSlider = styled(Slider)`
  slick-slider {
    border-radius: 5px;
  }
`;

export const StyledImg = styled.img`
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;
