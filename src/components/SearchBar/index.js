import { SearchInputElement } from './styles';

export const SearchBar = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <SearchInputElement
          type='text'
          onChange={props.handleChange}
          value={props.value}
        />
      </form>
    </div>
  );
};
