import axios from "axios";

async function register(credentials) {
  const response = await axios.post(
    "http://localhost:5000/api/auth/",
    credentials
  );
  return response.data;
}
async function login(credentials) {
  const response = await axios.post(
    "  http://localhost:5000/api/auth/login",
    credentials
  );
  return response.data;
}

const fetchAuth = {
  login,
  register,
};

export default fetchAuth;
