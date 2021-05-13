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
  FETCH_USER_COLLECTIONS_PENDING,
  FETCH_USER_COLLECTIONS_SUCCESS,
  FETCH_USER_COLLECTIONS_NO_DATA,
  FETCH_USER_COLLECTIONS_ERROR,
  FETCH_MORE_COLLECTIONS,
  FETCH_USER_STATS_PENDING,
  FETCH_USER_STATS_SUCCESS,
  FETCH_USER_STATS_ERROR,
} from './userTypes';

const initialState = {
  chosenTab: '',
  userHeaderData: null,
  isLoadingHeader: false,
  userHeaderDataError: false,
  userPhotos: [],
  isLoadingPhotos: false,
  photosPageToLoad: 1,
  hasMorePhotos: true,
  userPhotosError: false,
  index: -1,
  userCollections: [],
  isLoadingCollections: false,
  collectionsPageToLoad: 1,
  hasMoreCollections: true,
  userCollectionError: false,
  userStats: null,
  isLoadingStats: false,
  userStatsError: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case TAB_CLICK:
      return {
        ...state,
        chosenTab: action.payload,
      };
    case CLEAR_PREVIOUS_DATA:
      return {
        ...state,
        userPhotos: [],
        userCollections: [],
        userStats: null,
      };
    case FETCH_USER_INFO_PENDING:
      return {
        ...state,
        isLoadingHeader: true,
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        userHeaderData: action.payload,
        isLoadingHeader: false,
      };
    case FETCH_USER_INFO_ERROR:
      return {
        ...state,
        userHeaderDataError: true,
      };
    case FETCH_USER_PHOTOS_PENDING:
      return {
        ...state,
        isLoadingPhotos: true,
      };
    case FETCH_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        userPhotos: [...state.userPhotos, ...action.payload],
        isLoadingPhotos: false,
      };
    case FETCH_USER_PHOTOS_NO_DATA:
      return {
        ...state,
        isLoadingPhotos: false,
        hasMorePhotos: false,
      };
    case FETCH_USER_PHOTOS_ERROR:
      return {
        ...state,
        userPhotosError: true,
      };
    case FETCH_MORE_PHOTOS:
      return {
        ...state,
        photosPageToLoad: state.photosPageToLoad + 1,
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
    case FETCH_USER_COLLECTIONS_PENDING:
      return {
        ...state,
        isLoadingCollections: true,
      };
    case FETCH_USER_COLLECTIONS_SUCCESS:
      return {
        ...state,
        userCollections: [...state.userCollections, ...action.payload],
        isLoadingCollections: false,
      };
    case FETCH_USER_COLLECTIONS_NO_DATA:
      return {
        ...state,
        hasMoreCollections: false,
        isLoadingCollections: false,
      };
    case FETCH_USER_COLLECTIONS_ERROR:
      return {
        ...state,
        userCollectionsError: true,
      };
    case FETCH_MORE_COLLECTIONS:
      return {
        ...state,
        collectionsPageToLoad: state.collectionsPageToLoad + action.payload,
      };
    case FETCH_USER_STATS_PENDING:
      return {
        isLoadingStats: true,
      };
    case FETCH_USER_STATS_SUCCESS:
      return {
        ...state,
        userStats: action.payload,
      };
    case FETCH_USER_STATS_ERROR:
      return {
        ...state,
        userStatsError: true,
      };
    default:
      return state;
  }
}

export default userReducer;
