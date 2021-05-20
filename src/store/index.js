import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import feedReducer from './feed/feedReducer';
import featuredReducer from './featured/featuredReducer';
import userReducer from './user/userReducer';
import searchReducer from './search/searchReducer';

const rootReducer = combineReducers({
  feed: feedReducer,
  featured: featuredReducer,
  user: userReducer,
  search: searchReducer,
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
