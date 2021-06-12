import axios from 'axios';
import {
  TAB_CLICK,
  CLEAR_PREVIOUS_DATA,
  FETCH_SEARCH_PHOTOS_PENDING,
  FETCH_SEARCH_PHOTOS_SUCCESS,
  FETCH_SEARCH_PHOTOS_NO_DATA,
  FETCH_SEARCH_PHOTOS_ERROR,
  FETCH_MORE_SEARCH_PHOTOS,
  PHOTO_CLICK,
  CLOSE_MODAL,
  getSearchPhotosPageToLoad,
  FETCH_SEARCH_COLLECTIONS_PENDING,
  FETCH_SEARCH_COLLECTIONS_SUCCESS,
  FETCH_SEARCH_COLLECTIONS_NO_DATA,
  FETCH_SEARCH_COLLECTIONS_ERROR,
  FETCH_MORE_SEARCH_COLLECTIONS,
  getSearchCollectionsPageToLoad,
  FETCH_SEARCH_USERS_PENDING,
  FETCH_SEARCH_USERS_SUCCESS,
  FETCH_SEARCH_USERS_NO_DATA,
  FETCH_SEARCH_USERS_ERROR,
  FETCH_MORE_SEARCH_USERS,
  getSearchUsersPageToLoad,
} from './search.types';

export const handleTabClick =
  (chosenTab, searchTerm) => (dispatch, getState) => {
    dispatch({ type: TAB_CLICK, payload: chosenTab });

    switch (chosenTab) {
      case 'collections':
        return dispatch(getSearchCollections(searchTerm));
      case 'users':
        return dispatch(getSearchUsers(searchTerm));
      default:
        return dispatch(getSearchPhotos(searchTerm));
    }
  };

export const clearDataForNewSearch = () => (dispatch, getState) => {
  dispatch(handleCloseClick);
  dispatch({
    type: CLEAR_PREVIOUS_DATA,
  });
};

export const getSearchPhotos = searchTerm => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_SEARCH_PHOTOS_PENDING,
    });
    const pageToLoad = getSearchPhotosPageToLoad(getState());
    const { data } = await axios(
      `https://api.unsplash.com/search/photos?page=${pageToLoad}&query=${searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    if (data)
      dispatch({
        type: FETCH_SEARCH_PHOTOS_SUCCESS,
        payload: data.results,
      });
    else dispatch({ type: FETCH_SEARCH_PHOTOS_NO_DATA });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_SEARCH_PHOTOS_ERROR });
  }
};

export const getMoreSearchPhotos = () => {
  return { type: FETCH_MORE_SEARCH_PHOTOS };
};

export const handlePhotoClick = index => {
  return { type: PHOTO_CLICK, payload: index };
};

export const handleCloseClick = () => {
  return { type: CLOSE_MODAL };
};

export const getSearchCollections =
  searchTerm => async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_SEARCH_COLLECTIONS_PENDING });
      const pageToLoad = getSearchCollectionsPageToLoad(getState());
      const { data } = await axios(
        `https://api.unsplash.com/search/collections?page=${pageToLoad}&query=${searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      if (data)
        dispatch({
          type: FETCH_SEARCH_COLLECTIONS_SUCCESS,
          payload: data.results,
        });
      else dispatch({ type: FETCH_SEARCH_COLLECTIONS_NO_DATA });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_SEARCH_COLLECTIONS_ERROR });
    }
  };

export const getMoreCollections = () => {
  return { type: FETCH_MORE_SEARCH_COLLECTIONS };
};

export const getSearchUsers = searchTerm => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_SEARCH_USERS_PENDING });
    const pageToLoad = getSearchUsersPageToLoad(getState());
    const { data } = await axios(
      `https://api.unsplash.com/search/users?page=${pageToLoad}&query=${searchTerm}&client_id=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    if (data)
      dispatch({
        type: FETCH_SEARCH_USERS_SUCCESS,
        payload: data.results,
      });
    else dispatch({ type: FETCH_SEARCH_USERS_NO_DATA });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_SEARCH_USERS_ERROR });
  }
};

export const getMoreSearchUsers = () => {
  return { type: FETCH_MORE_SEARCH_USERS };
};
