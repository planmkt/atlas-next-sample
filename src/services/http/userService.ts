
import { api } from '@/services/api'




const getUser = async function (userId: string) {
  let response: any = []
  try {
    response = await api.get(`https://api.github.com/users/${userId}`)
  }
  catch (error) {
    console.log(error)
  }
  return response.data
}

export { getUser }
