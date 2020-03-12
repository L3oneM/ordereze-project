import PagesActionTypes from './pages.types';

export const setPages = pages => ({
  type: PagesActionTypes.SET_PAGES,
  payload: pages
});

export const deletePage = pageId => ({
  type: PagesActionTypes.DELETE_PAGE,
  payload: pageId
});

export const addNewPage = newPage => ({
  type: PagesActionTypes.ADD_PAGE,
  payload: newPage
});

export const setOnePage = page => ({
  type: PagesActionTypes.GET_ONE_PAGE,
  payload: page
});
