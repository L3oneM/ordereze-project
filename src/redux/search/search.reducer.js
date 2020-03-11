import searchActionTypes from './search.types';

const INITIAL_STATE = {
  search: '',
  sortBy: 'publishedOn',
  direction: 'Desc',
  currentPage: 1,
  pagesPerPage: 10
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.SET_SEARCH_BY_TITLE:
      return {
        ...state,
        search: action.payload
      };
    case searchActionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload.category,
        direction: action.payload.direction
      };
    case searchActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case searchActionTypes.SET_PAGES_PER_PAGE:
      return {
        ...state,
        pagesPerPage: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
