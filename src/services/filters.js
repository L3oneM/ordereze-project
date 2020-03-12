const compareValues = (category, direction) => {
  return (a, b) => {
    const A =
      typeof a[category] === 'string' ? a[category].toUpperCase() : a[category];
    const B =
      typeof b[category] === 'string' ? b[category].toUpperCase() : b[category];

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return direction === 'Desc' ? comparison * -1 : comparison;
  };
};

const pagesToShow = (pages, search, sortBy, direction) => {
  const sortedPages = pages.sort(compareValues(sortBy, direction));
  if (search) {
    return sortedPages.filter(page =>
      page.title.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    return sortedPages;
  }
};

const pagesToShowWithPagination = (pages, starts, ends) => {
  return pages.slice(starts, ends);
};

export { compareValues, pagesToShow, pagesToShowWithPagination };
