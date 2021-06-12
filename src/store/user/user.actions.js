import axios from 'axios';
import {
  TAB_CLICK,
  CLEAR_PREVIOUS_DATA,
  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_ERROR,
  FETCH_USER_PHOTOS_PENDING,
  FETCH_USER_PHOTOS_SUCCESS,
  FETCH_USER_PHOTOS_NO_DATA,
  FETCH_USER_PHOTOS_ERROR,
  FETCH_MORE_PHOTOS,
  PHOTO_CLICK,
  CLOSE_MODAL,
  getPhotosPageToLoad,
  FETCH_USER_COLLECTIONS_PENDING,
  FETCH_USER_COLLECTIONS_SUCCESS,
  FETCH_USER_COLLECTIONS_NO_DATA,
  FETCH_USER_COLLECTIONS_ERROR,
  FETCH_MORE_COLLECTIONS,
  getCollectionsPageToLoad,
} from './user.types';

export const handleTabClick = (chosenTab, username) => (dispatch, getState) => {
  dispatch({
    type: TAB_CLICK,
    payload: chosenTab,
  });

  return chosenTab === 'photos'
    ? dispatch(getUserPhotos(username))
    : dispatch(getUserCollections(username));
};

export const clearDataForNewUser = () => {
  return {
    type: CLEAR_PREVIOUS_DATA,
  };
};

export const getUserInfo = username => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_USER_INFO_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/users/${username}?client_id=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({
      type: FETCH_USER_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_INFO_ERROR,
    });
  }
};

export const getUserPhotos = username => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_USER_PHOTOS_PENDING,
    });
    const pageToLoad = getPhotosPageToLoad(getState());
    const { data } = await axios(
      `https://api.unsplash.com/users/${username}/photos?page=${pageToLoad}&per_page=10&order_by=latest&stats=false&client_id=${process.env.REACT_APP_API_KEY}`
    );
    if (data) dispatch({ type: FETCH_USER_PHOTOS_SUCCESS, payload: data });
    else dispatch({ type: FETCH_USER_PHOTOS_NO_DATA });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_USER_PHOTOS_ERROR });
  }
};

export const getMorePhotos = () => {
  return {
    type: FETCH_MORE_PHOTOS,
  };
};

export const handlePhotoClick = index => {
  return {
    type: PHOTO_CLICK,
    payload: index,
  };
};

export const handleCloseClick = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const getUserCollections = username => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_USER_COLLECTIONS_PENDING });
    const pageToLoad = getCollectionsPageToLoad(getState());
    const { data } = await axios(
      `https://api.unsplash.com/users/${username}/collections?page=${pageToLoad}&per_page=10&client_id=${process.env.REACT_APP_API_KEY}`
    );
    if (data)
      dispatch({
        type: FETCH_USER_COLLECTIONS_SUCCESS,
        payload: data,
      });
    else dispatch({ type: FETCH_USER_COLLECTIONS_NO_DATA });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_USER_COLLECTIONS_ERROR });
  }
};

export const getMoreCollections = () => {
  return {
    type: FETCH_MORE_COLLECTIONS,
    payload: 1,
  };
};
