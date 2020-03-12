import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import pagesReducer from './pages/pages.reducer';
import searchReducer from './search/search.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['pagesState']
};

const rootReducer = combineReducers({
  pagesState: pagesReducer,
  filters: searchReducer
});

export default persistReducer(persistConfig, rootReducer);
