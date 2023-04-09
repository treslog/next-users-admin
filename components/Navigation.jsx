
import Link from 'next/link'

export default function Navigation () {
  return (

    <div className='flex flex-col items-center justify-center mt-20 '>
      <div className='flex flex-col'>

        <nav className='fixed top-0 left-0 right-0 z-10 px-3 text-white bg-black sm:px-0'>
          <div className='flex justify-between w-full max-w-4xl py-3 m-auto'>

            <div className='flex items-center'>
              <Link className='flex items-center cursor-pointer gap-x-3' href='/'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6' />
                </svg>

                <h3 className='text-2xl font-medium'>
                  User list
                </h3>
              </Link>
            </div>

            <div className='flex items-center space-x-5'>
              <Link className='flex transition-colors duration-300 cursor-pointer hover:text-blue-500' href='/services'>

                Services
              </Link>

              <Link className='flex transition-colors duration-300 cursor-pointer hover:text-blue-500' href='/about'>

                About
              </Link>
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}
