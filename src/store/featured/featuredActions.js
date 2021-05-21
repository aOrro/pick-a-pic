import {
  HANDLE_INPUT_CHANGE,
  HANDLE_ICON_CLICK,
  HANDLE_FORM_SUBMIT,
  OPEN_COLLECTIONS_MODAL,
  ADD_PHOTO_TO_COLLECTION,
  CLOSE_COLLECTIONS_MODAL,
  COLLECTION_SELECTED,
  FOCUS_ON_NEW_COLLECTION,
  CREATE_NEW_COLLECTION,
} from './featuredTypes';

export const handleChange = e => {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: e.target.value,
  };
};

export const handleClick = index => {
  return {
    type: HANDLE_ICON_CLICK,
    payload: index,
  };
};

export const handleSubmit = e => {
  e.preventDefault();
  return {
    type: HANDLE_FORM_SUBMIT,
  };
};

export const openCollectionModal = photoInfo => {
  return {
    type: OPEN_COLLECTIONS_MODAL,
    payload: photoInfo,
  };
};

export const closeCollectionModal = () => (dispatch, getState) => {
  const state = getState();
  if (state.inputValue !== '') {
    const indexOfCollection = state.collections
      .map(item => item.title)
      .indexOf(state.modal.collectionSelected);
    dispatch({
      type: ADD_PHOTO_TO_COLLECTION,
      payload: indexOfCollection,
    });
  }
  dispatch({
    type: CLOSE_COLLECTIONS_MODAL,
  });
};

export const saveCollectionSelected = e => {
  return {
    type: COLLECTION_SELECTED,
    payload: e.target.value,
  };
};

export const handleFocus = () => {
  return {
    type: FOCUS_ON_NEW_COLLECTION,
  };
};

export const createNewCollection = photoInfo => {
  return {
    type: CREATE_NEW_COLLECTION,
    payload: photoInfo,
  };
};
