import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import feedReducer from './feed/feedReducer';
import featuredReducer from './featured/featuredReducer';
import userReducer from './user/userReducer';
import searchReducer from './search/searchReducer';
import collectionReducer from './collection/collectionReducer';

const rootReducer = combineReducers({
  feed: feedReducer,
  featured: featuredReducer,
  user: userReducer,
  search: searchReducer,
  collection: collectionReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
