import { useState } from 'react'
import { toast } from 'react-toastify'

import moment from 'moment'

import { getUser } from '@/services'
import { useAppDispatch, useAppSelector } from '@/store'

type UserPrps = {
  name: string,
  login: string,
  avatar_url: string,
  html_url: string,
  created_at: string,
}

const useHome = function () {
  const dispatch = useAppDispatch()
  const count = useAppSelector(state => state.test.count)

  const [user, setUser] = useState<UserPrps>()
  const [showModal, setShowModal] = useState(false)

  async function handleGetUser(formData: { search: string }) {
    try {
      const data = await getUser(formData.search)
      const userData: UserPrps = {
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        created_at: moment(data.created_at).format('DD/MM/YYYY')
      }

      setUser(userData)
      setShowModal(true)
    }
    catch (error) {
      toast.error('Usuário não encontrado')
    }
  }

  return {
    count, dispatch, user, showModal, setShowModal, handleGetUser
  }

}

export { useHome }
