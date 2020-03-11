import PagesActionTypes from './pages.types';

import { EditPageState } from './page.utils';

const INITIAL_STATE = [];

const pagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PagesActionTypes.SET_PAGES:
      return action.payload;
    case PagesActionTypes.DELETE_PAGE:
      return state.filter(page => page.id !== action.payload);
    case PagesActionTypes.ADD_PAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default pagesReducer;
