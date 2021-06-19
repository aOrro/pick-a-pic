import axios from 'axios';
import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  NO_MORE_DATA,
  GET_DATA_ERROR,
  GET_MORE_DATA,
  OPEN_MODAL,
  CLOSE_MODAL,
  getPageToLoad,
} from './explore.types';

export const getData = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_DATA_PENDING,
    });
    const pageToLoad = getPageToLoad(getState());
    const { data } = await axios(
      `https://api.unsplash.com/photos?page=${pageToLoad}&order_by=popular&client_id=${process.env.REACT_APP_API_KEY}`
    );
    if (data)
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: data,
      });
    else
      dispatch({
        type: NO_MORE_DATA,
      });
  } catch (error) {
    dispatch({
      type: GET_DATA_ERROR,
    });
  }
};

export const getMoreData = () => {
  return {
    type: GET_MORE_DATA,
  };
};

export const openPhotoModal = index => {
  return { type: OPEN_MODAL, payload: index };
};

export const closePhotoModal = () => {
  return { type: CLOSE_MODAL };
};
