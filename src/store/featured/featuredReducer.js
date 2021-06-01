import {
  HANDLE_INPUT_CHANGE,
  HANDLE_ICON_CLICK,
  HANDLE_FORM_SUBMIT,
  OPEN_ADD_TO_COLLECTION_MODAL,
  ADD_PHOTO_TO_COLLECTION,
  CLOSE_ADD_TO_COLLECTION_MODAL,
  REMOVE_PHOTO_FROM_COLLECTION,
  FOCUS_ON_CREATE_NEW_COLLECTION,
  CREATE_NEW_COLLECTION,
  OPEN_COLLECTION_MODAL,
  CLOSE_COLLECTION_MODAL,
} from './featuredTypes';

const initialState = {
  inputValue: '',
  collections: [
    { title: 'Collection A', photos: [] },
    { title: 'Collection B', photos: [] },
    { title: 'Collection C', photos: [] },
  ],
  openCollectionModal: false,
  collectionClicked: null,
  index: -1,
  modal: {
    photoInfo: null,
    showCollectionsModal: false,
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
        collectionClicked: action.payload,
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
    case OPEN_ADD_TO_COLLECTION_MODAL:
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
        collections: action.payload,
      };
    case REMOVE_PHOTO_FROM_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    case CLOSE_ADD_TO_COLLECTION_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          showCollectionsModal: false,
        },
      };
    case FOCUS_ON_CREATE_NEW_COLLECTION:
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
        inputValue: '',
        collections: [
          ...state.collections,
          { title: state.inputValue, photos: [state.modal.photoInfo] },
        ],
        modal: {
          showCollectionsModal: false,
        },
      };
    case OPEN_COLLECTION_MODAL:
      return {
        ...state,
        openCollectionModal: true,
        collectionClicked: action.payload,
      };
    case CLOSE_COLLECTION_MODAL:
      return {
        ...state,
        openCollectionModal: false,
        collectionClicked: -1,
      };
    default:
      return state;
  }
}

export default featuredReducer;
