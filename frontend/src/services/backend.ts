import axios from 'axios'

export const fetchNewsFromApi = async () => {
  const URL = 'http://localhost:3000/api/sports-news'
  try {
    const response = await axios.post(URL);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log(e)
    }
  }
};