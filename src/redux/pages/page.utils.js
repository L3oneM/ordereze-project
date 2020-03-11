export const EditPageState = (pages, pageToEdit) => {
  return pages.filter(page => page.id !== pageToEdit.id).concat(pageToEdit);
};
