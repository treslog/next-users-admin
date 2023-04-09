'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function Users ({ users }) {
  const router = useRouter()
  return (
    <section>
      <div className=''>
        <div className='mx-auto max-w-7xl gap-x-8 gap-y-20 '>
          <div className='max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Users list</h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ex quas rerum ad doloremque sint natus aperiam et magni mollitia?</p>
          </div>
          <ul role='list' className='grid gap-8 my-6 sm:grid-cols-2 xl:col-span-2'>
            {users.map((user) => (
              <li key={user.id}>
                <div
                  className='flex items-center p-6 bg-white border border-gray-400 rounded-lg cursor-pointer gap-x-6' onClick={() => {
                    router.push(`/users/${user.id}`)
                  }}
                >
                  <Image height='200' width='200' className='w-16 h-16 ' src={`https://robohash.org/${user.id}?set=set4`} alt={user.name} />
                  <div>
                    <h3 className='text-base font-bold leading-7 tracking-tight text-gray-900'>{user.name}</h3>
                    <p className='text-sm font-semibold leading-6 text-[#4b5577]'>{user.email}</p>
                    <p className='text-sm font-semibold leading-6 text-[#4b5577]'>{user.phone}</p>
                  </div>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Users
