import { combineReducers } from 'redux';

import pagesReducer from './pages/pages.reducer';
import searchReducer from './search/search.reducer';

const rootReducer = combineReducers({
  pagesState: pagesReducer,
  filters: searchReducer
});

export default rootReducer;
