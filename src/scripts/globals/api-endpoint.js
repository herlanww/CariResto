import CONFIG from './config';

const { BASE_URL } = CONFIG;

const API_ENDPOINT = {
  GET_RESTAURANT_LIST: `${BASE_URL}/list`,
  GET_DETAIL: (id) => `${BASE_URL}/detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${BASE_URL}/review`,
};

export default API_ENDPOINT;
