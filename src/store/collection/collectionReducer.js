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
} from './collectionTypes';

const initialState = {
  collectionData: null,
  isLoadingCollection: false,
  errorOnCollection: false,
  collectionPhotos: [],
  isLoadingPhotos: false,
  errorOnPhotos: false,
  pageToLoad: 1,
  hasMore: true,
  index: -1,
};

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLLECTION_DATA_PENDING:
      return {
        ...state,
        isLoadingCollection: true,
      };
    case FETCH_COLLECTION_DATA_SUCCESS:
      return {
        ...state,
        collectionData: action.payload,
        isLoadingCollection: false,
      };
    case FETCH_COLLECTION_DATA_ERROR:
      return {
        ...state,
        isLoadingCollection: false,
        errorOnCollection: true,
      };
    case FETCH_COLLECTION_PHOTOS_PENDING:
      return {
        ...state,
        isLoadingPhotos: true,
      };
    case FETCH_COLLECTION_PHOTOS_SUCCESS:
      return {
        ...state,
        collectionPhotos: action.payload,
        isLoadingCollection: false,
      };
    case FETCH_COLLECTION_PHOTOS_NO_MORE_DATA:
      return {
        ...state,
        isLoadingCollection: true,
        hasMore: false,
      };
    case FETCH_COLLECTION_PHOTOS_ERROR:
      return {
        ...state,
        isLoadingCollection: true,
        errorOnPhotos: true,
      };
    case FETCH_MORE_COLLECTION_PHOTOS:
      return {
        ...state,
        pageToLoad: state.pageToLoad + 1,
      };
    case OPEN_PHOTO_MODAL:
      return {
        ...state,
        index: action.payload,
      };
    case CLOSE_PHOTO_MODAL:
      return {
        ...state,
        index: -1,
      };
    default:
      return state;
  }
}

export default collectionReducer;
