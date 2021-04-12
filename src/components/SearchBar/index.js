export const SearchBar = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type='text' onChange={props.handleChange} value={props.value} />
    </form>
  );
};
