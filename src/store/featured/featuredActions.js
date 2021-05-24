import {
  HANDLE_INPUT_CHANGE,
  HANDLE_ICON_CLICK,
  HANDLE_FORM_SUBMIT,
  OPEN_ADD_TO_COLLECTION_MODAL,
  ADD_PHOTO_TO_COLLECTION,
  CLOSE_ADD_TO_COLLECTION_MODAL,
  REMOVE_PHOTO_FROM_COLLECTION,
  FOCUS_ON_CREATE_NEW_COLLECTION,
  CREATE_NEW_COLLECTION,
  CLOSE_STORIES_MODAL,
} from './featuredTypes';

export const handleChange = e => {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: e.target.value,
  };
};

export const handleClick = index => {
  console.log(index);
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

export const openAddToCollectionModal = photoInfo => {
  return {
    type: OPEN_ADD_TO_COLLECTION_MODAL,
    payload: photoInfo,
  };
};

export const closeCollectionModal = () => {
  return {
    type: CLOSE_ADD_TO_COLLECTION_MODAL,
  };
};

export const addToCollection = e => (dispatch, getState) => {
  const state = getState().featured;
  const stateCollections = [...state.collections];
  const collectionTitle = e.target.value;
  let chosenCollection = stateCollections.find(
    item => item.title === collectionTitle
  );

  if (e.target.checked) {
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

export const createNewCollection = () => {
  return {
    type: CREATE_NEW_COLLECTION,
  };
};

export const closeStoriesModal = () => {
  return {
    type: CLOSE_STORIES_MODAL,
  };
};
