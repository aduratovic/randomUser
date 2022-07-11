import axios from 'axios'

const BASE_URL = 'https://api.randomuser.me/'

export const fetchUser = async () => {
  const res = await axios.get(BASE_URL)
  return res.data.results[0]
}
