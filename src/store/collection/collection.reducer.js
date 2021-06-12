import {
  TAB_CLICK,
  FETCH_COLLECTION_DATA_PENDING,
  FETCH_COLLECTION_DATA_SUCCESS,
  FETCH_COLLECTION_DATA_ERROR,
  FETCH_COLLECTION_PHOTOS_PENDING,
  FETCH_COLLECTION_PHOTOS_SUCCESS,
  FETCH_COLLECTION_PHOTOS_NO_MORE_DATA,
  FETCH_RELATED_PENDING,
  FETCH_RELATED_SUCCESS,
  FETCH_RELATED_NO_DATA,
  FETCH_RELATED_ERROR,
  FETCH_COLLECTION_PHOTOS_ERROR,
  FETCH_MORE_COLLECTION_PHOTOS,
  OPEN_PHOTO_MODAL,
  CLOSE_PHOTO_MODAL,
  DELETE_PREVIOUS_DATA,
} from './collection.types';

const initialState = {
  chosenTab: '',
  collectionData: null,
  isLoadingCollection: false,
  errorOnCollection: false,
  collectionPhotos: [],
  isLoadingPhotos: false,
  errorOnPhotos: false,
  relatedCollections: [],
  isLoadingRelated: false,
  errorOnRelated: false,
  pageToLoad: 1,
  hasMore: true,
  index: -1,
};

function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case TAB_CLICK:
      return {
        ...state,
        chosenTab: action.payload,
      };
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
        collectionPhotos: [...state.collectionPhotos, ...action.payload],
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
    case FETCH_RELATED_PENDING:
      return {
        ...state,
        isLoadingRelated: true,
      };
    case FETCH_RELATED_SUCCESS:
      return {
        ...state,
        relatedCollections: action.payload,
        isLoadingRelated: false,
      };
    case FETCH_RELATED_NO_DATA:
      return {
        ...state,
        isLoadingRelated: false,
      };
    case FETCH_RELATED_ERROR:
      return {
        ...state,
        isLoadingRelated: false,
        errorOnRelated: true,
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
    case DELETE_PREVIOUS_DATA:
      return {
        ...state,
        collectionData: null,
        collectionPhotos: [],
        relatedCollections: [],
      };
    default:
      return state;
  }
}

export default collectionReducer;
