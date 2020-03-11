import { combineReducers } from 'redux';

import pagesReducer from './pages/pages.reducer';
import searchReducer from './search/search.reducer';

const rootReducer = combineReducers({
  pages: pagesReducer,
  filters: searchReducer
});

export default rootReducer;
