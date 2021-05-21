import { connect } from 'react-redux';

import {
  closeCollectionModal,
  saveCollectionSelected,
  handleFocus,
  createNewCollection,
} from '../../store/featured/featuredActions';

import {
  Container,
  BlurryDiv,
  StyledInput,
  StyledCloseIcon,
  StyledAddIcon,
} from './styles';

const AddToCollectionModal = props => {
  const { inputValue, collections, newCollection } = props.featured;

  return (
    <Container>
      <BlurryDiv></BlurryDiv>
      <div>
        <div>
          <h3>Add to:</h3>
          <StyledCloseIcon onClick={props.closeCollectionModal} />
        </div>
        <form onChange={props.saveCollectionSelected}>
          {collections.map(item => {
            return (
              <label for={item.title}>
                <input type='checkbox' name={item.title} value={item.title} />
                {item.title}
              </label>
            );
          })}
        </form>
        <StyledAddIcon onClick={props.handleFocus} />
        <form onSubmit={props.createNewCollection}>
          <StyledInput
            type='text'
            onFocus={props.handleFocus}
            onChange={props.handleChange}
            value={inputValue}
            placeholder='Add Collection...'
          />
        </form>
        {newCollection && (
          <button onClick={props.createNewCollection}>Create collection</button>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  featured: state.featured,
});

const mapDispatchToProps = {
  closeCollectionModal,
  saveCollectionSelected,
  handleFocus,
  createNewCollection,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCollectionModal);
