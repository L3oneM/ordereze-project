import searchActionTypes from './search.types';

export const searchByTitle = searchValue => ({
  type: searchActionTypes.SET_SEARCH_BY_TITLE,
  payload: searchValue
});

export const sortPagesBy = (category, direction) => ({
  type: searchActionTypes.SET_SORT_BY,
  payload: {
    category,
    direction
  }
});

export const setCurrentPage = numberOfPage => ({
  type: searchActionTypes.SET_CURRENT_PAGE,
  payload: numberOfPage
});

export const setPagesPerPage = number => ({
  type: searchActionTypes.SET_PAGES_PER_PAGE,
  payload: number
});
