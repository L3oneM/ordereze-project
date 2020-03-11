import axios from 'axios';

const baseUrl = 'http://pagesmanagement.azurewebsites.net/api/ResponsivePages';

const getAllPages = async () => {
  const request = await axios.get(`${baseUrl}`);
  return request.data;
};

const getPage = async pageId => {
  const request = await axios.get(`${baseUrl}/${pageId}`);
  return request.data;
};

const removePage = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const addPage = async newPage => {
  const response = await axios.post(`${baseUrl}`, newPage);

  return response.data;
};

const updatePage = async (pageId, updatedPage) => {
  console.log('2', updatedPage);
  const response = await axios.put(`${baseUrl}/${pageId}`, updatedPage);

  return response.data;
};

export { getAllPages, removePage, addPage, getPage, updatePage };
