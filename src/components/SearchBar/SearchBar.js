import {
  StyledForm,
  StyledSearchIcon,
  SearchInputElement,
} from './SearchBar.styles';

const SearchBar = props => {
  return (
    <div>
      <StyledForm onSubmit={props.handleSubmit}>
        <StyledSearchIcon />
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

export default SearchBar;
