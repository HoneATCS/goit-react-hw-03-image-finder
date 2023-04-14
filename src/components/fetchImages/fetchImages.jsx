import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';

// REACT_APP_API_KEY = 33774181 - bed99a30315d4582da4b976c0;

export async function fetchImages(inputData, page) {
  const searchParams = new URLSearchParams({
    key: process.env.REACT_APP_API_KEY,
    q: inputData,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
  const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

  return images.data;
}
