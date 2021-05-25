import axios from 'axios';

import {
  FETCH_COLLECTION_DATA_PENDING,
  FETCH_COLLECTION_DATA_SUCCESS,
  FETCH_COLLECTION_DATA_ERROR,
  FETCH_COLLECTION_PHOTOS_PENDING,
  FETCH_COLLECTION_PHOTOS_SUCCESS,
  FETCH_COLLECTION_PHOTOS_NO_MORE_DATA,
  FETCH_COLLECTION_PHOTOS_ERROR,
  FETCH_MORE_COLLECTION_PHOTOS,
  OPEN_PHOTO_MODAL,
  CLOSE_PHOTO_MODAL,
  getPageToLoad,
} from './collectionTypes';

export const getCollectionData = collectionId => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_COLLECTION_DATA_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/collections/${collectionId}?&client_id=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({
      type: FETCH_COLLECTION_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_COLLECTION_DATA_ERROR,
    });
  }
};

export const getCollectionPhotos =
  collectionId => async (dispatch, getState) => {
    try {
      dispatch({
        type: FETCH_COLLECTION_PHOTOS_PENDING,
      });
      const pageToLoad = getPageToLoad(getState());
      const { data } = await axios(
        `https://api.unsplash.com/collections/${collectionId}/photos?page=${pageToLoad}&per_page=10&client_id=${process.env.REACT_APP_API_KEY}`
      );
      data
        ? dispatch({
            type: FETCH_COLLECTION_PHOTOS_SUCCESS,
            payload: data,
          })
        : dispatch({
            type: FETCH_COLLECTION_PHOTOS_NO_MORE_DATA,
          });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_COLLECTION_PHOTOS_ERROR,
      });
    }
  };

export const getMorePhotos = () => {
  return {
    type: FETCH_MORE_COLLECTION_PHOTOS,
  };
};

export const handlePhotoClick = index => {
  return {
    type: OPEN_PHOTO_MODAL,
    payload: index,
  };
};

export const handleCloseClick = () => {
  return {
    type: CLOSE_PHOTO_MODAL,
  };
};
