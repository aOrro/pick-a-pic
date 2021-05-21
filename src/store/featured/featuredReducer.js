import {
  HANDLE_INPUT_CHANGE,
  HANDLE_ICON_CLICK,
  HANDLE_FORM_SUBMIT,
  OPEN_COLLECTIONS_MODAL,
  ADD_PHOTO_TO_COLLECTION,
  CLOSE_COLLECTIONS_MODAL,
  COLLECTION_SELECTED,
  FOCUS_ON_NEW_COLLECTION,
  CREATE_NEW_COLLECTION,
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
  modal: {
    photoInfo: null,
    showCollectionsModal: false,
    collectionSelected: null,
    newCollection: false,
  },
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
    case OPEN_COLLECTIONS_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          photoInfo: action.payload,
          showCollectionsModal: true,
        },
      };
    case ADD_PHOTO_TO_COLLECTION:
      return {
        ...state,
        collections: [
          ...state.collections,
          {
            title: state.inputValue,
            photos: [
              ...state.collections[action.payload].photos,
              ...state.photoInfo,
            ],
          },
        ],
      };
    case CLOSE_COLLECTIONS_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          showCollectionsModal: false,
        },
      };
    case COLLECTION_SELECTED:
      return {
        ...state,
        modal: {
          ...state.modal,
          collectionSelected: action.payload,
        },
      };
    case FOCUS_ON_NEW_COLLECTION:
      return {
        ...state,
        modal: {
          ...state.modal,
          newCollection: true,
        },
      };
    case CREATE_NEW_COLLECTION:
      return {
        ...state,
        collections: [
          ...state.collections,
          { title: state.inputValue, photos: [action.payload] },
        ],
      };
    default:
      return state;
  }
}

export default featuredReducer;
