import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import feedReducer from './feed/feedReducer';
import featuredReducer from './featured/featuredReducer';
import userReducer from './user/userReducer';
import searchReducer from './search/searchReducer';
import collectionReducer from './collection/collectionReducer';
import settingsReducer from './settings/settingsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['featured'],
};

const rootReducer = combineReducers({
  feed: feedReducer,
  featured: featuredReducer,
  user: userReducer,
  search: searchReducer,
  collection: collectionReducer,
  settings: settingsReducer,
});

const middleware = [thunk];

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  compose(
    applyMiddleware(...middleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);

export default (store, persistor);
