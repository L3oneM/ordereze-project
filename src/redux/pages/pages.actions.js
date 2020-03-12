import PagesActionTypes from './pages.types';
import {
  getAllPages,
  getPage,
  removePage,
  addPage
} from '../../services/pages';

export const fetchPagesStart = () => ({
  type: PagesActionTypes.FETCH_PAGES_START
});

export const fetchPagesSuccess = pages => ({
  type: PagesActionTypes.FETCH_PAGES_SUCCESS,
  payload: pages
});

export const fetchFaillure = errorMessage => ({
  type: PagesActionTypes.FETCH_FAILURE,
  payload: errorMessage
});

export const fetchPagesStartAsync = () => {
  return dispatch => {
    dispatch(fetchPagesStart());

    getAllPages()
      .then(pages => {
        dispatch(fetchPagesSuccess(pages));
      })
      .catch(error => {
        fetchFaillure(error.message);
        setTimeout(() => {
          dispatch(clearMessage());
        }, 3000);
      });
  };
};

export const fetchSinglePageStart = () => ({
  type: PagesActionTypes.FETCH_SINGLE_PAGE_START
});

export const fetchSinglePageSuccess = page => ({
  type: PagesActionTypes.FETCH_SINGLE_PAGE_SUCCESS,
  payload: page
});

export const fetchSinglePageFaillure = errorMessage => ({
  type: PagesActionTypes.FETCH_SINGLE_PAGE_FAILURE,
  payload: errorMessage
});

export const fetchSinglePageStartAsync = pageId => {
  return dispatch => {
    dispatch(fetchSinglePageStart());

    getPage(pageId)
      .then(page => {
        dispatch(fetchSinglePageSuccess(page));
      })
      .catch(error => {
        fetchFaillure(error.message);
        setTimeout(() => {
          dispatch(clearMessage());
        }, 3000);
      });
  };
};

export const DeletePageSuccess = pageId => ({
  type: PagesActionTypes.DELETE_PAGE_SUCCESS,
  payload: pageId
});

export const deletePageStartAsync = pageId => {
  return dispatch => {
    removePage(pageId)
      .then(page => {
        dispatch(DeletePageSuccess(page.id));
        dispatch(setSuccessMessage(`Page Deleted successfully!!!!`));
        setTimeout(() => {
          dispatch(clearMessage());
        }, 3000);
      })
      .catch(error => {
        fetchFaillure(error.message);
        setTimeout(() => {
          dispatch(clearMessage());
        }, 3000);
      });
  };
};

export const addNewPageSuccess = newPage => ({
  type: PagesActionTypes.ADD_PAGE_SUCCESS,
  payload: newPage
});

export const addNewPageStartAsync = newPage => {
  return dispatch => {
    addPage(newPage)
      .then(newPage => {
        dispatch(addNewPageSuccess(newPage));
        dispatch(setSuccessMessage(`New Page created successfully!`));
        setTimeout(() => {
          dispatch(clearMessage());
        }, 3000);
      })
      .catch(error => {
        fetchFaillure(error.message);
        setTimeout(() => {
          dispatch(clearMessage());
        }, 3000);
      });
  };
};

export const setErrorMessage = errorMessage => ({
  type: PagesActionTypes.SET_ERROR_MESSAGE,
  payload: errorMessage
});

export const setSuccessMessage = successMessage => ({
  type: PagesActionTypes.SET_SUCCESS_MESSAGE,
  payload: successMessage
});

export const clearMessage = () => ({
  type: PagesActionTypes.CLEAR_MESSAGE
});
