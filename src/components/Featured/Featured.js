import React, { useRef, useEffect } from 'react';

import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FeaturedCollection, PhotoModal } from 'components';

import {
  handleChange,
  handleClick,
  handleShowInput,
  handleSubmit,
  handleCollectionClick,
  deleteCollection,
  closeCollectionModal,
} from 'store/featured';

import {
  Container,
  StyledInput,
  HoverDiv,
  StyledDiv,
  StyledIcon,
  StyledSuccessIcon,
} from './Featured.styles';

const Featured = props => {
  const {
    inputValue,
    collections,
    showInput,
    openCollectionModal,
    collectionClicked,
  } = props.featured;

  const notify = action => {
    if (action === 'create') {
      toast(`Collection successfully created: ${inputValue}`);
    } else {
      props.deleteCollection();
      toast('Collection successfully deleted');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit();
    notify('create');
  };

  const inputRef = useRef();

  useEffect(() => {
    if (showInput) inputRef.current.focus();
    else return;
  }, [showInput]);

  return (
    <Container>
      <h3>Featured</h3>
      <StyledDiv>
        {showInput ? (
          <>
            <StyledSuccessIcon onClick={handleSubmit} />
            <form onSubmit={handleSubmit}>
              <StyledInput
                type='text'
                onChange={props.handleChange}
                value={inputValue}
                placeholder='Enter collection title...'
                ref={inputRef}
              />
            </form>
          </>
        ) : (
          <HoverDiv onClick={props.handleShowInput}>
            <StyledIcon />
            <span>Create collection</span>
          </HoverDiv>
        )}
      </StyledDiv>

      {collections.map((item, index) => {
        return (
          <FeaturedCollection
            title={item.title}
            collectionPhotos={item.photos}
            handleClick={() => props.handleCollectionClick(index)}
            deleteCollection={() => notify('delete')}
            key={item.title}
          />
        );
      })}
      {openCollectionModal && (
        <PhotoModal
          arrayOfPhotos={collections[collectionClicked].photos}
          index={0}
          handleCloseClick={props.closeCollectionModal}
        />
      )}
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  featured: state.featured,
});

const mapDispatchToProps = {
  handleChange,
  handleClick,
  handleShowInput,
  handleSubmit,
  handleCollectionClick,
  deleteCollection,
  closeCollectionModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
