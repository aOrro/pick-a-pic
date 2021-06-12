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
} from './user.types';

const initialState = {
  chosenTab: '',
  header: {
    userHeaderData: null,
    isLoadingHeader: false,
    userHeaderDataError: false,
  },
  photos: {
    userPhotos: [],
    isLoadingPhotos: false,
    photosPageToLoad: 1,
    hasMorePhotos: true,
    userPhotosError: false,
    index: -1,
  },
  collections: {
    userCollections: [],
    isLoadingCollections: false,
    collectionsPageToLoad: 1,
    hasMoreCollections: true,
    userCollectionError: false,
  },
  stats: { userStats: null, isLoadingStats: false, userStatsError: false },
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
        photos: {
          ...state.photos,
          userPhotos: [],
        },
        collections: {
          ...state.collections,
          userCollections: [],
        },
        stats: { ...state.stats, userStats: null },
      };
    case FETCH_USER_INFO_PENDING:
      return {
        ...state,
        header: {
          ...state.header,
          isLoadingHeader: true,
        },
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        header: {
          ...state.header,
          userHeaderData: action.payload,
          isLoadingHeader: false,
        },
      };
    case FETCH_USER_INFO_ERROR:
      return {
        ...state,
        header: {
          ...state.header,
          userHeaderDataError: true,
        },
      };
    case FETCH_USER_PHOTOS_PENDING:
      return {
        ...state,
        photos: {
          ...state.photos,
          isLoadingPhotos: true,
        },
      };
    case FETCH_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          userPhotos: [...state.photos.userPhotos, ...action.payload],
          isLoadingPhotos: false,
        },
      };
    case FETCH_USER_PHOTOS_NO_DATA:
      return {
        ...state,
        photos: {
          ...state.photos,
          isLoadingPhotos: false,
          hasMorePhotos: false,
        },
      };
    case FETCH_USER_PHOTOS_ERROR:
      return {
        ...state,
        photos: {
          ...state.photos,
          isLoadingPhotos: false,
          userPhotosError: true,
        },
      };
    case FETCH_MORE_PHOTOS:
      return {
        ...state,
        photos: {
          ...state.photos,
          photosPageToLoad: state.photos.photosPageToLoad + 1,
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
    case FETCH_USER_COLLECTIONS_PENDING:
      return {
        ...state,
        collections: {
          ...state.collections,
          isLoadingCollections: true,
        },
      };
    case FETCH_USER_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: {
          ...state.collections,
          userCollections: [
            ...state.collections.userCollections,
            ...action.payload,
          ],
          isLoadingCollections: false,
        },
      };
    case FETCH_USER_COLLECTIONS_NO_DATA:
      return {
        ...state,
        collections: {
          ...state.collections,
          hasMoreCollections: false,
          isLoadingCollections: false,
        },
      };
    case FETCH_USER_COLLECTIONS_ERROR:
      return {
        ...state,
        collections: {
          ...state.collections,
          userCollectionsError: true,
        },
      };
    case FETCH_MORE_COLLECTIONS:
      return {
        ...state,
        collections: {
          ...state.collections,
          collectionsPageToLoad: state.collections.collectionsPageToLoad + 1,
        },
      };
    default:
      return state;
  }
}

export default userReducer;
