import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg';
import { StyledForm, SearchInputElement } from './styles';

export const SearchBar = props => {
  return (
    <div>
      <StyledForm onSubmit={props.handleSubmit}>
        <SearchIcon />
        <SearchInputElement
          type='text'
          onChange={props.handleChange}
          value={props.value}
          placeholder='What are you looking for?'
        />
      </StyledForm>
    </div>
  );
};
