import PagesActionTypes from './pages.types';
import pagesActionTypes from './pages.types';

const INITIAL_STATE = {
  pages: [],
  page: {},
  isFetching: false,
  errorMessage: undefined,
  successMessage: undefined
};

const pagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PagesActionTypes.FETCH_PAGES_START:
    case PagesActionTypes.FETCH_SINGLE_PAGE_START:
      return {
        ...state,
        isFetching: true
      };
    case PagesActionTypes.FETCH_PAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pages: action.payload
      };
    case PagesActionTypes.FETCH_FAILURE:
    case PagesActionTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case PagesActionTypes.DELETE_PAGE_SUCCESS:
      return {
        ...state,
        pages: state.pages.filter(page => page.id !== action.payload)
      };
    case PagesActionTypes.ADD_PAGE_SUCCESS:
      return {
        ...state,
        pages: [...state.pages, action.payload]
      };
    case PagesActionTypes.FETCH_SINGLE_PAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.payload
      };
    case pagesActionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        errorMessage: undefined,
        successMessage: undefined
      };
    case PagesActionTypes.SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload
      };
    default:
      return state;
  }
};

export default pagesReducer;
