import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import { setCountries } from '@/countriesSlice'
import { useTheme } from 'next-themes'

export default function Home() {
  const dispatch = useDispatch()
  const { theme, setTheme } = useTheme()

  const [loading, setLoading] = useState(true)
  const [searchCountry, setSearchCountry] = useState('')
  const [regionFilter, setRegionFilter] = useState('')

  const countries = useSelector((state) => state.countriesData.countries)

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()
      dispatch(setCountries(data))
      setLoading(false)
    }
    fetchCountries()
  }, [dispatch])

  const getFiltered = () => {
    if (!regionFilter) {
      return countries
    }
    return countries.filter((item) => item?.region === regionFilter)
  }

  const filteredList = useMemo(getFiltered, [regionFilter, countries])

  return (
    <>
      <Head>
        <title> Country Home </title>
        <meta name='description' content='Rest countries API' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=''>
        <header
          className='lg:flex lg:justify-between lg:items-center lg:px-10 lg:h-[60px] lg:w-full md:flex md:justify-between md:items-center md:px-10
        md:h-[50px] sm:flex sm:justify-between sm:items-center sm:px-5 sm:h-[50px] shadow-lg '
        >
          <span className='font-medium text-[18px]'> Where in the world? </span>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='font-medium'
          >
            {' '}
            Dark Mode{' '}
          </button>
        </header>
        {loading ? (
          <div className='flex justify-center items-center h-screen'>
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 010 10v3a8 8 0 000 16 4 4 0 110-8V12z'
              ></path>
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
        ) : (
          <main>
            <header
              className='lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-10 md:flex md:flex-row md:justify-between md:items-center md:p-10 
            sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-5 sm:p-5'
            >
              <input
                type='text'
                onChange={(e) => setSearchCountry(e.target.value)}
                placeholder='Search for a country...'
                className='lg:w-[350px] lg:h-[50px] md:w-[350px] md:h-[50px] sm:w-[370px] sm:h-[50px] rounded-lg shadow-lg indent-4 outline-none '
              />
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className='lg:w-[150px] lg:h-[50px] md:w-[130px] md:h-[50px] sm:w-[140px] sm:h-[50px] rounded-lg shadow-2xl
                 outline-none indent-2 appearance-none cursor-pointer'
              >
                <option value=''>All</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
              </select>
            </header>

            <span className='flex gap-2 px-10'>
              {' '}
              <span className='font-bold text-1xl'>
                {' '}
                Total Countries:{' '}
              </span>{' '}
              {filteredList?.length}{' '}
            </span>

            <section
              className='xl:grid xl:grid-cols-5 xl:gap-3 xl:px-10 lg:grid lg:grid-cols-5 lg:gap-5 lg:p-10 lg:justify-center lg:items-center md:grid
            md:grid-cols-2 md:gap-4 md:justify-center md:items-center md:p-10 sm:grid sm:grid-cols-1 sm:justify-center sm:items-center sm:p-5  '
            >
              {filteredList
                .filter((search) =>
                  search.name.common
                    .toLowerCase()
                    .includes(searchCountry.toLowerCase())
                )
                .map((country, id) => {
                  return (
                    <Link
                      href={`/countrydetails/${country.cca3}`}
                      key={id}
                      className='lg:w-[310px] h-auto md:w-[350px] md:gap-5 sm:w-full my-2 border-[1px] border-[grey] rounded-lg flex flex-col gap-2 cursor-pointer '
                    >
                      <Image
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        width={100}
                        height={100}
                        className='w-full h-[150px] rounded-t-lg'
                      />

                      <div className='px-5 flex flex-col gap-2 py-3'>
                        <h1 className='font-medium'>
                          {' '}
                          {country.name?.common}{' '}
                        </h1>
                        <p>
                          {' '}
                          Population:{' '}
                          <span className='font-medium'>
                            {' '}
                            {country.population}
                          </span>{' '}
                        </p>
                        <p>
                          {' '}
                          Region:{' '}
                          <span className='font-medium'>
                            {' '}
                            {country.region}{' '}
                          </span>{' '}
                        </p>
                        <p>
                          {' '}
                          Capital:{' '}
                          <span className='font-medium'>
                            {' '}
                            {country.capital}
                          </span>{' '}
                        </p>
                      </div>
                    </Link>
                  )
                })}
            </section>
          </main>
        )}
      </main>
    </>
  )
}
