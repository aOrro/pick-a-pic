import styled from 'styled-components';

export const PhotosDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const StyledPhoto = styled.img`
  width: 33%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 5px;
`;
