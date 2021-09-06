import axios from 'axios'

async function getAll() {
  const response = await axios.get("http://localhost:5000/api/store/collections/");
  return response.data;
}

const fetchCollection = {
  getAll,
};

export default fetchCollection;