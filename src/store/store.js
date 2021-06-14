import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import {
  feedReducer,
  featuredReducer,
  userReducer,
  searchReducer,
  collectionReducer,
  settingsReducer,
} from 'store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['featured', 'settings'],
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
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);

export default (store, persistor);
