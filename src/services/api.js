import axios from '../lib/axios'

export const getUserData = async () => {
  const { data } = await axios.get('/endpoint')
  return data
}
