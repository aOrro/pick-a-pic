import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
  margin: 0 auto;
`;

export const PhotosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const StyledPhoto = styled.img`
  width: 33%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 3px;
`;
