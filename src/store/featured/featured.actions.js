import {
  HANDLE_INPUT_CHANGE,
  HANDLE_ICON_CLICK,
  HANDLE_FORM_SUBMIT,
  OPEN_ADD_TO_COLLECTION_MODAL,
  ADD_PHOTO_TO_COLLECTION,
  CLOSE_ADD_TO_COLLECTION_MODAL,
  // DELETE_COLLECTION,
  REMOVE_PHOTO_FROM_COLLECTION,
  FOCUS_ON_CREATE_NEW_COLLECTION,
  CREATE_NEW_COLLECTION,
  SHOW_INPUT,
  OPEN_COLLECTION_MODAL,
  CLOSE_COLLECTION_MODAL,
} from './featured.types';

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

export const handleSubmit = () => (dispatch, getState) => {
  const state = getState().featured;
  if (state.inputValue === '') return;
  else
    dispatch({
      type: HANDLE_FORM_SUBMIT,
    });
};

export const openAddToCollectionModal = photoInfo => {
  return {
    type: OPEN_ADD_TO_COLLECTION_MODAL,
    payload: photoInfo,
  };
};

export const closeAddToCollectionModal = () => {
  return {
    type: CLOSE_ADD_TO_COLLECTION_MODAL,
  };
};

/* export const deleteCollection = index => (dispatch, getState) => {
  const collections = [...getState().featured.collections];
  collections.splice(index, 1);
  console.log(collections);
  return dispatch({
    type: DELETE_COLLECTION,
    payload: collections,
  });
}; */

export const addToCollection =
  (isChecked, checkboxValue) => (dispatch, getState) => {
    const state = getState().featured;
    const stateCollections = [...state.collections];
    let chosenCollection = stateCollections.find(
      item => item.title === checkboxValue
    );

    if (isChecked) {
      chosenCollection.photos.push(state.modal.photoInfo);
      dispatch({
        type: ADD_PHOTO_TO_COLLECTION,
        payload: stateCollections,
      });
    } else {
      let collectionPhotos = chosenCollection.photos;
      collectionPhotos.splice(collectionPhotos.length - 1, 1);
      dispatch({
        type: REMOVE_PHOTO_FROM_COLLECTION,
        payload: stateCollections,
      });
    }
  };

export const handleFocus = () => {
  return {
    type: FOCUS_ON_CREATE_NEW_COLLECTION,
  };
};

export const handleShowInput = () => {
  return {
    type: SHOW_INPUT,
  };
};

export const createNewCollection = () => {
  return {
    type: CREATE_NEW_COLLECTION,
  };
};

export const handleCollectionClick = index => (dispatch, getState) => {
  const collections = getState().featured.collections;
  if (collections[index].photos === []) return;
  else
    return dispatch({
      type: OPEN_COLLECTION_MODAL,
      payload: index,
    });
};

export const closeCollectionModal = () => {
  return {
    type: CLOSE_COLLECTION_MODAL,
  };
};
