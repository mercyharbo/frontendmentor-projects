import React, { useState, useMemo } from 'react'
import { Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Countries = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [filterOption, setFilterOption] = useState('')

  // Country region for filter
  const regionList = [
    'Select region',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ]

  const countries = useSelector((state) => state.countriesData.countries)

  const getFiltered = () => {
    if (!filterOption) {
      return countries
    }
    return countries.filter((item) => item?.region === filterOption)
  }

  const filteredList = useMemo(getFiltered, [filterOption, countries])

  return (
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

        <Formik>
          <Form className='flex flex-row gap-2 justify-center items-center'>
            <Field
              as='select'
              name='region'
              onChange={(e) => setFilterOption(e.target.value)}
              className='lg:w-[150px] lg:h-[50px] md:w-[130px] md:h-[50px] sm:w-[140px] sm:h-[50px] rounded-lg shadow-2xl
                 outline-none indent-2'
            >
              {regionList.map((data, index) => {
                return (
                  <option key={index} value={data}>
                    {' '}
                    {data}{' '}
                  </option>
                )
              })}
            </Field>
          </Form>
        </Formik>
      </header>

      <span className='flex gap-2 px-10'>
        {' '}
        <span className='font-bold text-1xl'> Total Countries: </span>{' '}
        {filteredList?.length}{' '}
      </span>

      <section
        className='xl:grid xl:grid-cols-4 xl:gap-3 xl:px-10 lg:grid lg:grid-cols-4 lg:gap-5 lg:p-10 lg:justify-center lg:items-center md:grid
            md:grid-cols-2 md:gap-4 md:justify-center md:items-center md:p-10 sm:grid sm:grid-cols-1 sm:justify-center sm:items-center sm:p-5  '
      >
        {filteredList
          .filter((search) =>
            search.name.common
              .toLowerCase()
              .includes(searchCountry.toLowerCase())
          )
          .map((country, id) => {
            {
              /* console.log(country.name?.common, 'country name...') */
            }
            return (
              <Link
                to={`${country?.name?.common}`}
                key={id}
                className='lg:w-[310px] h-auto md:w-[350px] md:gap-5 sm:w-full my-2 border-2 border-white rounded-lg flex flex-col gap-2 cursor-pointer '
              >
                <img
                  src={country.flags?.png}
                  alt=''
                  className='w-full h-[150px]'
                />
                <div className='px-5 flex flex-col gap-2 py-3'>
                  <h1 className='font-medium'> {country.name?.common} </h1>
                  <p> Population: {country.population} </p>
                  <p> Region: {country.region} </p>
                  <p> Capital: {country.capital} </p>
                </div>
              </Link>
            )
          })}
      </section>
    </main>
  )
}

export default Countries
