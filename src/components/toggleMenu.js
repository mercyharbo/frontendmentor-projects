import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

const ToggleMenu = () => {
  const [activeSections, setActiveSections] = useState('')

  return (
    <main
      className='2xl:top-14 2xl:right-3 lg:w-[40rem] lg:h-auto lg:p-10 lg:gap-5 lg:top-14 lg:right-3 md:w-[20rem] md:top-14 md:right-5 md:p-4 md:gap-5
      sm:w-[20rem] sm:top-14 sm:right-0 sm:gap-4 sm:p-5  absolute  bg-white shadow-2xl flex flex-col rounded-lg '
    >
      <article className='flex lg:flex-row lg:justify-between lg:items-start lg:gap-5 md:flex-col md:gap-5 sm:flex-col sm:gap-5'>
        <section className='flex lg:flex-col justify-start items-start lg:gap-3 md:flex-col md:gap-4 sm:flex-col sm:gap-4'>
          <button
            onClick={() => setActiveSections('company')}
            className='font-semibold flex justify-between items-center w-full '
          >
            Company
            <FontAwesomeIcon
              icon={faChevronDown}
              className='lg:hidden md:flex sm:flex'
            />
          </button>
          <div className='lg:flex lg:flex-col lg:justify-start lg:items-start lg:gap-2 md:hidden sm:hidden'>
            <Link href={'/'}>About </Link>
            <Link href={'/'}>History</Link>
            <Link href={'/'}>Join the team </Link>
            <Link href={'/'}>Press</Link>
            <Link href={'/'}>Contact us </Link>
            <Link href={'/'}>Help Center</Link>
          </div>

          {activeSections === 'company' && (
            <div className='lg:hidden md:flex md:flex-col md:justify-start md:items-start md:gap-3 sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-3 '>
              <Link href={'/'}>About </Link>
              <Link href={'/'}>History</Link>
              <Link href={'/'}>Join the team </Link>
              <Link href={'/'}>Press</Link>
              <Link href={'/'}>Contact us </Link>
              <Link href={'/'}>Help Center</Link>
            </div>
          )}
        </section>
        <section className='flex lg:flex-col justify-start items-start lg:gap-3 md:flex-col md:gap-4 sm:flex-col sm:gap-4'>
          <button
            onClick={() => setActiveSections('product')}
            className='font-semibold flex justify-between items-center w-full '
          >
            Product
            <FontAwesomeIcon
              icon={faChevronDown}
              className='lg:hidden md:flex sm:flex'
            />
          </button>

          <div className='lg:flex lg:flex-col lg:justify-start lg:items-start lg:gap-2 md:hidden sm:hidden'>
            <Link href={'/'}>Developers/API</Link>
            <Link href={'/'}>unsplash Dataset</Link>
            <Link href={'/'}>Unsplash for IOS</Link>
            <Link href={'/'}>Apps & Plugins</Link>
          </div>

          {activeSections === 'product' && (
            <div className='lg:hidden md:flex md:flex-col md:justify-start md:items-start md:gap-3 sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-3 '>
              <Link href={'/'}>Developers/API</Link>
              <Link href={'/'}>unsplash Dataset</Link>
              <Link href={'/'}>Unsplash for IOS</Link>
              <Link href={'/'}>Apps & Plugins</Link>
            </div>
          )}
        </section>
        <section className='flex lg:flex-col justify-start items-start lg:gap-3 md:flex-col md:gap-4 sm:flex-col sm:gap-4'>
          <button
            onClick={() => setActiveSections('community')}
            className='font-semibold flex justify-between items-center w-full '
          >
            Community
            <FontAwesomeIcon
              icon={faChevronDown}
              className='lg:hidden md:flex sm:flex'
            />
          </button>

          <div className='lg:flex lg:flex-col lg:justify-start lg:items-start lg:gap-2 md:hidden sm:hidden'>
            <Link href={'/'}>Become a contributor </Link>
            <Link href={'/'}>Topics</Link>
            <Link href={'/'}>Collections</Link>
            <Link href={'/'}>Trends</Link>
            <Link href={'/'}>Unsplash Awards</Link>
            <Link href={'/'}>Stats</Link>
          </div>

          {activeSections === 'community' && (
            <div className='lg:hidden md:flex md:flex-col md:justify-start md:items-start md:gap-3 sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-3 '>
              <Link href={'/'}>Become a contributor </Link>
              <Link href={'/'}>Topics</Link>
              <Link href={'/'}>Collections</Link>
              <Link href={'/'}>Trends</Link>
              <Link href={'/'}>Unsplash Awards</Link>
              <Link href={'/'}>Stats</Link>
            </div>
          )}
        </section>
      </article>
      <hr />
      <section
        className='flex lg:flex-row lg:justify-between lg:items-center md:flex-col md:justify-start md:items-start md:gap-4 sm:flex-col sm:gap-4 sm:justify-start
      sm:items-start'
      >
        <div className='flex lg:flex-row lg:justify-start lg:items-center lg:gap-3 md:flex-col sm:flex-col w-full'>
          <button
            onClick={() => setActiveSections('legal')}
            className='lg:hidden font-semibold md:flex justify-between items-center w-full sm:flex'
          >
            Legal
            <FontAwesomeIcon
              icon={faChevronDown}
              className='lg:hidden md:flex sm:flex'
            />
          </button>

          <div className='lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-2 md:hidden sm:hidden'>
            <Link href={'/license'}>License</Link>
            <Link href={'/license'}>Privacy Policy</Link>
            <Link href={'/license'}>Terms</Link>
            <Link href={'/license'}>Security</Link>
          </div>

          {activeSections === 'legal' && (
            <div className='lg:hidden md:flex md:flex-col md:justify-start md:items-start md:gap-3 sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-3 '>
              <Link href={'/license'}>License</Link>
              <Link href={'/license'}>Privacy Policy</Link>
              <Link href={'/license'}>Terms</Link>
              <Link href={'/license'}>Security</Link>
            </div>
          )}
        </div>
        <div className='flex'>
          <select name='lang' id='lang'>
            <option value='English'>English</option>
            <option value='french'>French</option>
            <option value='yoruba'>Yoruba</option>
          </select>
        </div>
      </section>
    </main>
  )
}

export default ToggleMenu
