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
  FETCH_SEARCH_COLLECTIONS_PENDING,
  FETCH_SEARCH_COLLECTIONS_SUCCESS,
  FETCH_SEARCH_COLLECTIONS_NO_DATA,
  FETCH_SEARCH_COLLECTIONS_ERROR,
  FETCH_MORE_SEARCH_COLLECTIONS,
  FETCH_SEARCH_USERS_PENDING,
  FETCH_SEARCH_USERS_SUCCESS,
  FETCH_SEARCH_USERS_NO_DATA,
  FETCH_SEARCH_USERS_ERROR,
  FETCH_MORE_SEARCH_USERS,
} from './searchTypes';

const initialState = {
  chosenTab: '',
  photosData: [],
  photosPageToLoad: 1,
  hasMorePhotos: true,
  isLoadingPhotos: false,
  hasErrorPhotos: false,
  index: -1,
  collectionsData: [],
  collectionsPageToLoad: 1,
  hasMoreCollections: true,
  isLoadingCollections: false,
  hasErrorCollections: false,
  usersData: [],
  usersPageToLoad: 1,
  hasMoreUsers: true,
  isLoadingUsers: false,
  hasErrorUsers: false,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case TAB_CLICK:
      return {
        ...state,
        chosenTab: action.payload,
      };
    case CLEAR_PREVIOUS_DATA:
      return {
        ...state,
        photosData: [],
        collectionsData: [],
        usersData: [],
      };
    case FETCH_SEARCH_PHOTOS_PENDING:
      return {
        ...state,
        isLoadingPhotos: true,
      };
    case FETCH_SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photosData: [...state.photosData, ...action.payload],
        isLoadingPhotos: false,
      };
    case FETCH_SEARCH_PHOTOS_NO_DATA:
      return {
        ...state,
        hasMorePhotos: false,
        isLoadingPhotos: false,
      };
    case FETCH_SEARCH_PHOTOS_ERROR:
      return {
        ...state,
        hasErrorPhotos: true,
        isLoadingPhotos: false,
      };
    case FETCH_MORE_SEARCH_PHOTOS:
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
    case FETCH_SEARCH_COLLECTIONS_PENDING:
      return {
        ...state,
        isLoadingCollections: true,
      };
    case FETCH_SEARCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collectionsData: [...state.collectionsData, ...action.payload],
        isLoadingCollections: false,
      };
    case FETCH_SEARCH_COLLECTIONS_NO_DATA:
      return {
        ...state,
        hasMoreCollections: false,
        isLoadingCollections: false,
      };
    case FETCH_SEARCH_COLLECTIONS_ERROR:
      return {
        ...state,
        hasErrorCollections: true,
        isLoadingCollections: false,
      };
    case FETCH_MORE_SEARCH_COLLECTIONS:
      return {
        ...state,
        collectionsPageToLoad: state.collectionsPageToLoad + 1,
      };
    case FETCH_SEARCH_USERS_PENDING:
      return {
        ...state,
        isLoadingUsers: true,
      };
    case FETCH_SEARCH_USERS_SUCCESS:
      return {
        ...state,
        usersData: [...state.usersData, ...action.payload],
        isLoadingUsers: false,
      };
    case FETCH_SEARCH_USERS_NO_DATA:
      return {
        ...state,
        hasMoreUsers: false,
        isLoadingUsers: false,
      };
    case FETCH_SEARCH_USERS_ERROR:
      return {
        ...state,
        hasErrorUsers: true,
        isLoadingUsers: false,
      };
    case FETCH_MORE_SEARCH_USERS:
      return {
        ...state,
        usersPageToLoad: state.usersPageToLoad + 1,
      };
    default:
      return state;
  }
}

export default searchReducer;
