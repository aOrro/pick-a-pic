import { StyledPhoto } from './styles';

export const Photo = props => {
  return <StyledPhoto src={props.src} alt={props.alt} />;
};
