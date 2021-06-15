import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { feedReducer } from 'store/feed';
import { featuredReducer } from 'store/featured';
import { userReducer } from 'store/user';
import { searchReducer } from 'store/search';
import { collectionReducer } from 'store/collection';
import { settingsReducer } from 'store/settings';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings'],
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
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);

export default (store, persistor);
