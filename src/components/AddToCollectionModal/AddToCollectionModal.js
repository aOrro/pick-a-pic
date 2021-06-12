import { connect } from 'react-redux';

import {
  closeAddToCollectionModal,
  addToCollection,
  handleChange,
  handleFocus,
  createNewCollection,
} from 'store';

import {
  Container,
  BlurryDiv,
  Modal,
  ModalHeader,
  CollectionsList,
  StyledInput,
  StyledCloseIcon,
  StyledAddIcon,
} from './AddToCollectionModal.styles';

const AddToCollectionModal = props => {
  const { inputValue, collections } = props.featured;
  const { newCollection } = props.featured.modal;

  return (
    <Container>
      <BlurryDiv></BlurryDiv>
      <Modal>
        <ModalHeader>
          <h3>Add to:</h3>
          <StyledCloseIcon onClick={props.closeAddToCollectionModal} />
        </ModalHeader>
        <CollectionsList>
          {collections.map(item => {
            return (
              <label htmlFor={item.title} key={item.title}>
                <input
                  type='checkbox'
                  name={item.title}
                  defaultValue={item.title}
                  onChange={e =>
                    props.addToCollection(e.target.checked, e.target.value)
                  }
                />
                {item.title}
              </label>
            );
          })}
        </CollectionsList>
        <StyledAddIcon onClick={props.handleFocus} />
        <form onSubmit={props.createNewCollection}>
          <StyledInput
            type='text'
            onFocus={props.handleFocus}
            onChange={props.handleChange}
            defaultValue={inputValue}
            placeholder='New Collection'
          />
        </form>
        {newCollection && (
          <button onClick={props.createNewCollection}>Create collection</button>
        )}
      </Modal>
    </Container>
  );
};

const mapStateToProps = state => ({
  featured: state.featured,
});

const mapDispatchToProps = {
  closeAddToCollectionModal,
  addToCollection,
  handleChange,
  handleFocus,
  createNewCollection,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCollectionModal);
