import Link from 'next/link'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnsplash } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faBell,
  faCircleUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

export default function Header({ activePage }) {
  const router = useRouter()

  function handleRefresh() {
    router.reload()
  }

  return (
    <>
      <main
        className='flex py-5 lg:flex-row lg:justify-between lg:items-center lg:gap-5 lg:px-10 md:justify-center md:items-center md:gap-5 md:px-5 sm:px-5
      sm:justify-between sm:items-center sm:gap-5 '
      >
        <section className='flex w-full lg:flex-row lg:justify-start lg:items-center lg:gap-8 md:flex-row md:justify-start md:items-center md:gap-8 sm:gap-5 '>
          <button onClick={handleRefresh} className='cursor-pointer'>
            <FontAwesomeIcon
              icon={faUnsplash}
              style={{ fontSize: 40, color: 'black' }}
            />
          </button>
          <div className='relative w-full'>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: 'grey' }}
              className='absolute lg:top-4 lg:left-5 md:top-3 md:left-4 sm:top-3 sm:left-3'
            />
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search high-resolution images'
              className='w-full rounded-full indent-4 text-sm bg-gray-200 lg:indent-14 lg:h-[50px] md:h-[40px] md:indent-14 sm:h-[40px] px-5 '
            />
          </div>
        </section>

        <section className='flex lg:flex-row lg:justify-between lg:items-center lg:gap-5 md:flex-row md:justify-center md:items-center md:gap-3 sm:gap-3'>
          <nav className='lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-4 md:flex md:flex-row md:justify-center md:items-center md:gap-3 sm:hidden'>
            <Link
              href={'/advertise'}
              className={
                activePage === 'advertise'
                  ? 'text-black font-semibold  capitalize'
                  : 'text-gray-400  capitalize lg:flex md:hidden sm:hidden'
              }
            >
              advertise{' '}
            </Link>

            <Link
              href={'/blog'}
              className={
                activePage === 'blog'
                  ? 'text-black font-semibold  capitalize'
                  : 'text-gray-400  capitalize lg:flex md:hidden sm:hidden'
              }
            >
              blog
            </Link>

            <Link
              href={'/unsplash+'}
              className={
                activePage === 'unsplash+'
                  ? 'text-black font-semibold  capitalize'
                  : 'text-gray-400  capitalize lg:flex md:hidden sm:hidden'
              }
            >
              unsplash+
            </Link>
          </nav>
          <button
            className='border-[1px] border-gray-200 lg:h-[40px] md:h-[35px] md:text-sm rounded-lg w-[150px] text-gray-500 hover:border-black 
        hover:text-black lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:hidden '
          >
            {' '}
            Submit a photo{' '}
          </button>
          <button className='lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:hidden'>
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: 30, color: 'grey' }}
            />
          </button>
          <div className='bg-gray-200 rounded-full h-[35px] w-[35px] flex justify-center items-center '>
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ fontSize: 30, color: 'grey' }}
            />
          </div>
          <button className=''>
            {' '}
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 20, color: 'grey' }}
            />
          </button>
        </section>
      </main>
    </>
  )
}
