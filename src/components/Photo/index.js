import styled from 'styled-components';

const StyledPhoto = styled.img`
  margin: 5px;
`;

export const Photo = props => {
  return <StyledPhoto src={props.src} alt={props.alt} />;
};
