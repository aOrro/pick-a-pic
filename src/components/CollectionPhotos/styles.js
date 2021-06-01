import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
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
