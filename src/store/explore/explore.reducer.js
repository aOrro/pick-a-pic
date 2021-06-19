import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  NO_MORE_DATA,
  GET_DATA_ERROR,
  GET_MORE_DATA,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './explore.types.js';

const initialState = {
  data: [],
  pageToLoad: 1,
  index: -1,
  hasMore: true,
  isLoading: false,
  error: false,
};

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        isLoading: false,
      };
    case NO_MORE_DATA:
      return {
        ...state,
        hasMore: false,
        isLoading: false,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case GET_MORE_DATA:
      return {
        ...state,
        pageToLoad: state.pageToLoad + 1,
      };
    case OPEN_MODAL:
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
};

export default exploreReducer;
