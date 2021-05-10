import {
  HANDLE_INPUT_CHANGE,
  HANDLE_ICON_CLICK,
  HANDLE_FORM_SUBMIT,
} from './featuredTypes';

const initialState = {
  inputValue: '',
  collections: [
    { title: 'Collection A', photos: [1, 2, 3] },
    { title: 'Collection B', photos: [4, 5, 6] },
    { title: 'Collection C', photos: [7, 8, 9] },
  ],
  showStories: false,
  collectionClicked: null,
};

function featuredReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case HANDLE_ICON_CLICK:
      return {
        ...state,
        showStories: !state.showStories,
        collectionsClicked: action.payload,
      };
    case HANDLE_FORM_SUBMIT:
      return {
        ...state,
        inputValue: '',
        collections: [
          ...state.collections,
          { title: state.inputValue, photos: [] },
        ],
      };
    default:
      return state;
  }
}

export default featuredReducer;
