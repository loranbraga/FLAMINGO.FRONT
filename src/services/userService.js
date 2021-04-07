import api from '../config/api'

export const registerUser = async (data) => {
  return api.post('/register', data);
};

export const authenticate = async (email, password) => {
  return api.post('/authenticate', {email, password});
};