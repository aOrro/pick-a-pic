import styled from 'styled-components';

export const PhotosDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const HoverDiv = styled.div`
  display: none;
`;

export const ImageContainer = styled.div`
  width: 33%;
  height: 250px;
  position: relative;
  display: inline-block;
  margin-bottom: 5px;

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

export const StyledPhoto = styled.img`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
