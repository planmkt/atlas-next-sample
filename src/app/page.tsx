'use client'
import React from 'react'

import { X } from 'lucide-react'
import Image from 'next/image'

import { Modal } from '@/components/Modal'
import { useHome } from '@/hooks'
import { increment } from '@/store/modules/count/slice'

import style from './Home.module.scss'
export default function Home() {
  const { count, dispatch, user, showModal, setShowModal, userId, setUserId, handleGetUser } = useHome()
  return (
    <main className={style.content}>
      <Image src="/img/logo.svg" alt="Atlas" width={200} height={200} />
      <h1 className={style.title}>Template para densenvolvimento Atlas</h1>
      <p className={style.text}>{count}</p>
      <button className={style.button} onClick={() => dispatch(increment())}>count</button>
      <div className='flex m-3 gap-2'>
        <input value={userId} onChange={(e) => setUserId(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Informe um github user" type="text" name="search" />
        <button className={style.button} onClick={() => handleGetUser()}>Procurar</button>
      </div>
      {showModal &&
        <Modal.Root>
          <Modal.Header title="Usuário">
            <X onClick={() => setShowModal(false)} color="white" className='ml-auto cursor-pointer' />
          </Modal.Header>
          <Modal.Content>
            {user?.name &&
              <div className='flex flex-col justify-center content-center p-5'>
                <img className='m-auto rounded-full w-32' src={user.avatar_url} alt={user.name} />
                <h3 className='m-auto text-xl text-blue_intermediate font-semibold'>{user.name}</h3>
                <a target="_blank" href={user.html_url} className='m-auto hover:text-blue_light' rel="noreferrer">{user.login}</a>
                <p className='m-auto'>Criado em: {user.created_at}</p>
              </div>
            }
            {!user?.name &&
              <div className='flex grow flex-col justify-center content-center p-5'>
                <h3 className='m-auto text-xl text-blue_intermediate font-semibold'>Usuário não encontrado</h3>
              </div>
            }
          </Modal.Content>
        </Modal.Root>
      }
    </main>
  )
}
