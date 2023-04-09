
import { Inter } from 'next/font/google'

import Users from '@/components/Users'

const inter = Inter({ subsets: ['latin'] })

async function fetchUsers () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return await res.json()
}

async function Home () {
  const users = await fetchUsers()
  return (
    <main style={inter.style}>
      <Users users={users} />
    </main>
  )
}

export default Home
