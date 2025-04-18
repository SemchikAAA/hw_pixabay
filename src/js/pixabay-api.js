import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49684635-7a6aa23e2b6de301ea62c53b0';

export async function getImagesByQuery({
  q,
  page = 1,
  colors,
  category,
  per_page,
}) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page,
      colors,
      category,
      page,
    },
  });

  if (!response.data.hits.length) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }

  return response.data;
}
