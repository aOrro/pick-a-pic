import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BlurryDiv = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;
