import { createSelector } from 'reselect';

const selectPagesState = state => state.pagesState;

export const selectPages = createSelector(
  [selectPagesState],
  pagesState => pagesState.pages
);

export const totalPages = createSelector([selectPages], pages => pages.length);

export const selectSinglePage = createSelector(
  [selectPagesState],
  pagesState => pagesState.page
);

export const selectIsPagesFetching = createSelector(
  [selectPagesState],
  pagesState => pagesState.isFetching
);

export const selectErrorMessage = createSelector(
  [selectPagesState],
  pagesState => pagesState.errorMessage
);

export const selectSuccessMessage = createSelector(
  [selectPagesState],
  pagesState => pagesState.successMessage
);
