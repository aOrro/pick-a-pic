import { useRef, useEffect } from 'react';

import { connect } from 'react-redux';

import {
  closeAddToCollectionModal,
  addToCollection,
  handleChange,
  handleFocus,
  createNewCollection,
} from 'store/featured';

import {
  Container,
  BlurryDiv,
  Modal,
  ModalHeader,
  CollectionsList,
  NewCollectionDiv,
  StyledForm,
  NewCollectionSpan,
  StyledInput,
  StyledCloseIcon,
  StyledAddIcon,
} from './AddToCollectionModal.styles';

const AddToCollectionModal = props => {
  const inputRef = useRef();
  const { inputValue, collections } = props.featured;
  const { newCollection } = props.featured.modal;

  useEffect(() => {
    if (newCollection) {
      return inputRef.current.focus();
    }
  }, [newCollection]);

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
        {newCollection ? (
          <NewCollectionDiv>
            <StyledForm onSubmit={props.createNewCollection}>
              <label htmlFor='collection-title'>Collection title:</label>
              <StyledInput
                type='text'
                name='collection-title'
                onChange={props.handleChange}
                defaultValue={inputValue}
                placeholder='Enter title...'
                ref={inputRef}
              />
            </StyledForm>
            <button onClick={props.createNewCollection}>
              Create collection
            </button>
          </NewCollectionDiv>
        ) : (
          <NewCollectionSpan>
            <StyledAddIcon onClick={props.handleFocus} />
            <span onClick={props.handleFocus}>New Collection</span>
          </NewCollectionSpan>
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
