import axios from 'axios';
import {
  FETCH_FEED_PHOTOS_PENDING,
  FETCH_FEED_PHOTOS_SUCCESS,
  FETCH_FEED_PHOTOS_NO_DATA,
  FETCH_FEED_PHOTOS_ERROR,
  FETCH_NEW_PAGE,
  PHOTO_CLICK,
  CLOSE_MODAL,
  getPageToLoad,
} from './feedTypes';

export const getFeedPhotos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_FEED_PHOTOS_PENDING,
    });
    const pageToLoad = getPageToLoad(getState());
    const { data } = await axios(
      `https://api.unsplash.com/photos?page=${pageToLoad}&client_id=${process.env.REACT_APP_API_KEY}`
    );
    data
      ? dispatch({
          type: FETCH_FEED_PHOTOS_SUCCESS,
          payload: data,
        })
      : dispatch({
          type: FETCH_FEED_PHOTOS_NO_DATA,
        });
  } catch (error) {
    dispatch({
      type: FETCH_FEED_PHOTOS_ERROR,
    });
  }
};

export const getMoreData = () => {
  return {
    type: FETCH_NEW_PAGE,
    payload: 1,
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
    payload: -1,
  };
};
