import bigSearchIcon from '../../assets/images/big-search-icon.png';
import { MainSearchComponent, SearchInputElement } from './styles';

export const SearchBar = props => {
  return (
    <MainSearchComponent>
      <div>
        <img src={bigSearchIcon} alt='big search icon' />
      </div>
      <form onSubmit={props.handleSubmit}>
        <SearchInputElement
          type='text'
          onChange={props.handleChange}
          value={props.value}
        />
      </form>
    </MainSearchComponent>
  );
};
