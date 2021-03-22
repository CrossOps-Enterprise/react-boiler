import axios from '../lib/axios'

const endpoints = {
  getPost: '/posts/1'
}

export const getPost = async () => {
  const { data } = await axios.get(endpoints.getPost)
  return data
}
