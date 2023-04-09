async function getUser (id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return await data.json()
}

export default async function Users ({ params }) {
  const {
    id,
    name,
    username,
    email
  } = await getUser(params.id)

  return (
    <main className='flex flex-col gap-4 p-6 bg-white border border-gray-400 rounded-lg'>
      <img className='w-24 h-24' src={`https://robohash.org/${id}?set=set4`} alt={name} />
      <h3 className='text-base font-bold leading-7 tracking-tight text-gray-900'>{name}</h3>
      <p className='text-sm font-semibold leading-6 text-[#4b5577]'>{username}</p>
      <p className='text-sm font-semibold leading-6 text-[#4b5577]'>{email}</p>

    </main>
  )
}
