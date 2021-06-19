import styled from 'styled-components';

export const Container = styled.div`
  margin: 85px auto;
  padding-top: 10px;
  width: 55%;
`;

export const HoverDiv = styled.div`
  display: none;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;

  &:hover ${HoverDiv} {
    width: 100%;
    height: 100%;
    position: absolute;
    display: inline-block;
    opacity: 0.7;
    background: ${props => props.theme.main};
    border-radius: 5px;
    color: ${props => props.theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
