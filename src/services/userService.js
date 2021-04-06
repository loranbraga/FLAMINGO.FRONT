import api from '../config/api'

export const registerUser = async (data) => {
  return api.post('/register', data);
};