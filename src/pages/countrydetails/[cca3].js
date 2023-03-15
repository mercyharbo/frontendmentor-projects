import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'next-themes'

import Image from 'next/image'
import Link from 'next/link'

import { setCountryDetails } from '@/countriesSlice'

export default function CountryDetails() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { theme, setTheme } = useTheme()

  const [loading, setLoading] = useState(true)
  const data = useSelector((state) => state.countriesData.countryDetails)

  // Fetch country details
  useEffect(() => {
    async function fetchCountryDetails() {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${router.query.cca3}`
      )
      const data = await res.json()
      dispatch(setCountryDetails(data[0]))
      setLoading(false)
    }

    fetchCountryDetails()
  }, [dispatch, router.query.cca3])

  if (!data) {
    return (
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
    )
  }

  return (
    <>
      <Head>
        <title> {data?.name?.common} Country Details </title>
        <meta
          name='description'
          content='Get to know more about this country '
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
        <main className='lg:p-20 md:p-10 sm:p-10 '>
          <Link
            href={`/`}
            className='flex flex-row justify-center items-center gap-2 border-[1px] border-gray-300 w-[80px] h-[25px] rounded-md hover:bg-blue-400 '
          >
            {' '}
            <Image
              src='/left-arrow.png'
              alt=''
              width={100}
              height={100}
              className='w-3 h-3'
            />{' '}
            Back{' '}
          </Link>
          <section className='flex lg:flex-row lg:gap-10 lg:py-20 md:flex-col md:gap-5 sm:flex-col sm:gap-5 md:py-20 sm:py-20'>
            <Image
              src={data?.flags.svg}
              alt=''
              width={100}
              height={100}
              className='w-[400px] h-[250px] shadow-2xl rounded-lg'
            />

            <div className='flex flex-col'>
              <span className='font-bold text-2xl'> {data?.name.common} </span>

              <div className='flex lg:flex-row lg:justify-between lg:items-start lg:gap-10'>
                <div className='flex flex-col gap-4 lg:py-8'>
                  <span className='font-medium text-[14px] flex flex-row gap-2 '>
                    Native Name:
                    <p className='font-light'>
                      {Object.entries(data?.name.nativeName).map((x) => {
                        return x[1].common
                      })}{' '}
                    </p>
                  </span>
                  <span className='font-medium text-[14px] flex flex-row gap-2 '>
                    Population:
                    <p className='font-light'>
                      {' '}
                      {data?.population === 'number'
                        ? data?.population.toLocalString('en-US')
                        : data?.population}{' '}
                    </p>
                  </span>
                  <span className='font-medium text-[14px] flex flex-row gap-2 '>
                    Region:
                    <p className='font-light'> {data?.region} </p>
                  </span>
                  <span className='font-medium text-[14px] flex flex-row gap-2 '>
                    Sub Region:
                    <p className='font-light'> {data?.subregion} </p>
                  </span>
                  <span className='font-medium text-[14px] flex flex-row gap-2 '>
                    Capital:
                    <p className='font-light'> {data?.capital[0]} </p>
                  </span>
                </div>

                <div className='flex flex-col gap-4 lg:py-8 lg:ml-[80px] '>
                  <span className='font-medium text-[14px] flex flex-row gap-2'>
                    Top Level Domain:
                    <p className='font-light'> {data?.tld[0]} </p>
                  </span>
                  <span className='font-medium text-[14px] flex flex-row gap-2'>
                    Currencies:
                    <p className='font-light'>
                      {Object.entries(data?.currencies).map((x) => {
                        return x[1].name
                      })}
                    </p>
                  </span>
                  <span className='font-medium text-[14px] flex flex-row gap-2'>
                    Languages:
                    <p className='font-light'>
                      {Object.values(data?.languages)
                        .map((lang) => lang)
                        .join(', ')}
                    </p>
                  </span>
                </div>
              </div>

              <p className='font-bold flex flex-row gap-4'>
                Border Countries:
                <div className='flex lg:flex-row lg:gap-5 justify-center items-center'>
                  {data?.borders.map((x, key) => {
                    return (
                      <Link
                        key={key}
                        href={`/countrydetails/${x}`}
                        className='font-medium border-[1px] border-gray-300 rounded-md text-[12px] lg:h-[25px] lg:w-[60px] flex justify-center items-center '
                      >
                        {x}
                      </Link>
                    )
                  })}
                </div>
              </p>
            </div>
          </section>
        </main>
      )}
    </>
  )
}
