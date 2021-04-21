import {api} from '../config/api'

export const registerUser = async (data) => {
  let fd = new FormData();
  fd.append('file',data.file)
  fd.append('username',data.username)
  fd.append('name',data.name)
  fd.append('email',data.email)
  fd.append('password',data.password)

  console.log(data)
  return api.post('/user', fd , {headers: {
    'Content-Type': 'multipart/form-data'
  }});
};

export const authenticate = async (email, password) => {
  return api.post('/session', {email, password});
};