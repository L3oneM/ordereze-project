import axios from 'axios';

const baseUrl = 'http://pagesmanagement.azurewebsites.net';

const getAll = async () => {
  const request = await axios.get(`${baseUrl}/api/ResponsivePages`);

  return request.data;
};

const deletePage = async id => {};

export { getAll };
