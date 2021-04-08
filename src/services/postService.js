import api from '../config/api'

export const createPost = async (data) => {
  return api.post('/post', data);
};

export const getPosts = async () => {
  return api.get('/posts');
};

export const getPostsByUser = async (username) => {
  return api.get(`/posts/${username}`);
};

export const likePost = async (post_id) => {
  return api.post(`/like/${post_id}`);
};

export const dislikePost = async (post_id) => {
  return api.post(`/dislike/${post_id}`);
};

export const deletePost = async (post_id) => {
  return api.delete(`/post/${post_id}`);
};
