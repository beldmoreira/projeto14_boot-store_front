import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
}

async function login(data) {
    const token = await axios.post(`${BASE_URL}/login`, data);
    return token;
}

const api = {
    createConfig,
    login
}

export default api;

