import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.main};
  box-sizing: border-box;
  color: ${props => props.theme.secondary};
`;

export const lightThemeStyles = {
  main: '#efefef',
  secondary: '#0e0e0e',
  third: '#e6e6e6',
  text: '#000',
  cardBackground: '#fff',
  borders: 'lightgrey',
};

export const darkThemeStyles = {
  main: '#1b1b1b',
  secondary: '#efefef',
  third: '#343434',
  text: '#efefef',
  cardBackground: '#272727',
  borders: '#343434',
};
