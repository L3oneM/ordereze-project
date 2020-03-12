import { createSelector } from 'reselect';

const selectFilters = state => state.filters;

export const selectAllFilters = createSelector(
  [selectFilters],
  filters => filters
);

export const selectSearch = createSelector(
  [selectFilters],
  filters => filters.search
);

export const selectSortBy = createSelector(
  [selectFilters],
  filters => filters.sortBy
);

export const selectDirection = createSelector(
  [selectFilters],
  filters => filters.direction
);

export const selectCurrentPage = createSelector(
  [selectFilters],
  filters => filters.currentPage
);

export const selectPagesPerPage = createSelector(
  [selectFilters],
  filters => filters.pagesPerPage
);
