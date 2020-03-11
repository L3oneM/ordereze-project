import { combineReducers } from 'redux';

import pagesReducer from './pages/pages.reducer';

const rootReducer = combineReducers({
  pages: pagesReducer
});

export default rootReducer;
