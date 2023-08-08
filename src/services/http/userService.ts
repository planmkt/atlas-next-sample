
import { api } from '@/services/api'




const getUser = async function (userId: string) {

  const response = await api.get(`https://api.github.com/users/${userId}`)
  return response.data || response

}

export { getUser }
