import {
  FETCH_FEED_PHOTOS_PENDING,
  FETCH_FEED_PHOTOS_SUCCESS,
  FETCH_FEED_PHOTOS_NO_DATA,
  FETCH_FEED_PHOTOS_ERROR,
  FETCH_NEW_PAGE,
  PHOTO_CLICK,
  CLOSE_MODAL,
} from './feed.types';

const initialState = {
  photos: [],
  pageToLoad: 1,
  hasMore: true,
  index: -1,
  isLoading: false,
  error: false,
};

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FEED_PHOTOS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_FEED_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        isLoading: false,
      };
    case FETCH_FEED_PHOTOS_NO_DATA:
      return {
        ...state,
        hasMore: false,
        isLoading: false,
      };
    case FETCH_FEED_PHOTOS_ERROR:
      return {
        ...state,
        error: true,
      };
    case FETCH_NEW_PAGE:
      return {
        ...state,
        pageToLoad: state.pageToLoad + 1,
      };
    case PHOTO_CLICK:
      return {
        ...state,
        index: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        index: -1,
      };
    default:
      return state;
  }
}

export default feedReducer;
