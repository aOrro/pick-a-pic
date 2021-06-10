import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const SearchInputElement = styled.input`
  background: ${props => props.theme.third};
  width: 250px;
  height: 40px;
  padding: 0 15px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  position: relative;
  color: ${props => props.theme.secondary};

  &:focus {
    outline: none;
  }
`;
