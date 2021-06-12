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
} from './search.types';

const initialState = {
  chosenTab: '',
  photos: {
    data: [],
    pageToLoad: 1,
    hasMore: true,
    isLoading: false,
    error: false,
    index: -1,
  },
  collections: {
    data: [],
    pageToLoad: 1,
    hasMore: true,
    isLoading: false,
    error: false,
  },
  users: {
    data: [],
    pageToLoad: 1,
    hasMore: true,
    isLoading: false,
    error: false,
  },
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
        photos: {
          ...state.photos,
          data: [],
        },
        collections: {
          ...state.collections,
          data: [],
        },
        users: {
          ...state.users,
          data: [],
        },
      };
    case FETCH_SEARCH_PHOTOS_PENDING:
      return {
        ...state,
        photos: {
          ...state.photos,
          isLoading: true,
        },
      };
    case FETCH_SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          data: [...state.photos.data, ...action.payload],
          isLoading: false,
        },
      };
    case FETCH_SEARCH_PHOTOS_NO_DATA:
      return {
        ...state,
        photos: {
          ...state.photos,
          hasMore: false,
          isLoading: false,
        },
      };
    case FETCH_SEARCH_PHOTOS_ERROR:
      return {
        ...state,
        photos: {
          ...state.photos,
          error: true,
          isLoading: false,
        },
      };
    case FETCH_MORE_SEARCH_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          pageToLoad: state.photos.pageToLoad + 1,
        },
      };
    case PHOTO_CLICK:
      return {
        ...state,
        photos: {
          ...state.photos,
          index: action.payload,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        photos: {
          ...state.photos,
          index: -1,
        },
      };
    case FETCH_SEARCH_COLLECTIONS_PENDING:
      return {
        ...state,
        collections: {
          ...state.collections,
          isLoading: true,
        },
      };
    case FETCH_SEARCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: {
          ...state.collections,
          data: [...state.collections.data, ...action.payload],
          isLoading: false,
        },
      };
    case FETCH_SEARCH_COLLECTIONS_NO_DATA:
      return {
        ...state,
        collections: {
          ...state.collections,
          hasMore: false,
          isLoading: false,
        },
      };
    case FETCH_SEARCH_COLLECTIONS_ERROR:
      return {
        ...state,
        collections: {
          ...state.collections,
          error: true,
          isLoading: false,
        },
      };
    case FETCH_MORE_SEARCH_COLLECTIONS:
      return {
        ...state,
        collections: {
          ...state.collections,
          pageToLoad: state.collections.pageToLoad + 1,
        },
      };
    case FETCH_SEARCH_USERS_PENDING:
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: true,
        },
      };
    case FETCH_SEARCH_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          data: [...state.users.data, ...action.payload],
          isLoading: false,
        },
      };
    case FETCH_SEARCH_USERS_NO_DATA:
      return {
        ...state,
        users: {
          ...state.users,
          hasMore: false,
          isLoading: false,
        },
      };
    case FETCH_SEARCH_USERS_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          error: true,
          isLoading: false,
        },
      };
    case FETCH_MORE_SEARCH_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          pageToLoad: state.users.pageToLoad + 1,
        },
      };
    default:
      return state;
  }
}

export default searchReducer;
