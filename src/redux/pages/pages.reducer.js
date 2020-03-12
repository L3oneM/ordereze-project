import PagesActionTypes from './pages.types';

const INITIAL_STATE = {
  pages: [],
  page: {}
};

const pagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PagesActionTypes.SET_PAGES:
      return {
        ...state,
        pages: action.payload
      };
    case PagesActionTypes.DELETE_PAGE:
      return {
        ...state,
        pages: state.pages.filter(page => page.id !== action.payload)
      };
    case PagesActionTypes.ADD_PAGE:
      return {
        ...state,
        pages: [...state.pages, action.payload]
      };
    case PagesActionTypes.GET_ONE_PAGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};

export default pagesReducer;
