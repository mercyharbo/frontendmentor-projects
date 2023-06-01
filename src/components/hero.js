import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import {
  faArrowDown,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  setCategoryParams,
  setErrorMessage,
  setHeroPhoto,
  setIsFailure,
  setIsLoading,
  setIsModalOpen,
  setPhotos,
  setSelectedImg,
} from '@/store/photosSlice'

import categoriesData from './categories.json'
import heroDetailsData from './heroDetails.json'

export default function Hero() {
  const dispatch = useDispatch()
  const categoriesRef = useRef(null)

  const perPage = 10
  const [page, setPage] = useState(1)
  const [showOverlay, setShowOverlay] = useState(false)

  const searchInput = useSelector((state) => state.searchSlice.searchInput)
  const searchResults = useSelector((state) => state.searchSlice.searchResults)
  const randomHeroImage = useSelector((state) => state.photosSlice.heroPhoto)
  const photos = useSelector((state) => state.photosSlice.photos)
  const isFailed = useSelector((state) => state.photosSlice.isFailure)
  const isLoading = useSelector((state) => state.photosSlice.isLoading)
  const errorMessage = useSelector((state) => state.photosSlice.errorMessage)
  const categoryParams = useSelector(
    (state) => state.photosSlice.categoryParams
  )

  const fetchRandomPhoto = async (category) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${category}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
        },
      }
    )
    const data = await response.json()

    dispatch(setHeroPhoto(data))
  }

  const fetchPhotos = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?query=${categoryParams}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
        },
      }
    )

    if (response.ok) {
      const data = await response.json()
      dispatch(setPhotos([...photos, ...data.results]))
      dispatch(setIsFailure(false))
      dispatch(setIsLoading(false))
      setPage((prevPage) => prevPage + 1)
    } else {
      dispatch(
        setErrorMessage(
          'Failed to fetch photos due to rate limit by Unsplash API'
        )
      )
      dispatch(setIsFailure(true))
      dispatch(setIsLoading(false))
    }
  }

  useEffect(() => {
    fetchPhotos()
    fetchRandomPhoto(categoryParams)
  }, [categoryParams])

  const loadMore = () => {
    // dispatch(setIsLoading(true))
    fetchPhotos()
  }

  const handleImgClick = (imgId) => {
    dispatch(setSelectedImg(imgId))
    dispatch(setIsModalOpen(true))
  }

  /**
   * These are two functions that handle scrolling left and right on a categories reference element in a
   * React component.
   */
  const handleScrollLeft = () => {
    categoriesRef.current.scrollLeft -= 100
  }

  const handleScrollRight = () => {
    categoriesRef.current.scrollLeft += 100
  }

  return (
    <main className='w-full'>
      <div className='flex flex-row justify-between items-center 2xl:gap-5 xl:gap-4 lg:px-10 md:px-10 sm:px-5 sm:gap-2 divide-x divide-gray-300 py-2  '>
        <div className='flex flex-row lg:gap-5 md:gap-4 sm:gap-2'>
          {categoriesData.editor.map((option) => (
            <button
              key={option}
              className={
                categoryParams === option
                  ? 'text-gray-500 border-b-2 text-sm border-black capitalize py-1 '
                  : 'text-gray-500 text-sm capitalize '
              }
              onClick={() => dispatch(setCategoryParams(option))}
            >
              {option}
            </button>
          ))}
        </div>

        <div className='flex flex-row items-center 2xl:gap-3 lg:gap-5 overflow-hidden lg:px-4 md:px-4 md:gap-5 sm:gap-2 sm:px-1 '>
          <button
            className='text-gray-500 hover:text-gray-800 focus:outline-none w-[20px] '
            onClick={handleScrollLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div
            className='flex flex-row overflow-hidden py-2 2xl:gap-3 lg:space-x-2 lg:gap-5 md:space-x-2 md:gap-4 sm:gap-2 sm:space-x-1 '
            ref={categoriesRef}
          >
            {categoriesData.categories.map((category) => (
              <button
                key={category}
                className={
                  categoryParams === category
                    ? 'text-gray-500 border-b-2 text-sm border-black capitalize py-1'
                    : 'text-gray-500 text-sm capitalize '
                }
                style={{ whiteSpace: 'nowrap' }}
                onClick={() => dispatch(setCategoryParams(category))}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            className='text-gray-500 hover:text-gray-800 focus:outline-none w-[20px] '
            onClick={handleScrollRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className='relative 2xl:h-[700px] lg:h-[600px] md:h-[400px] sm:h-[300px]'>
        <Image
          src={
            randomHeroImage?.urls?.raw ||
            'https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
          }
          alt={randomHeroImage?.description || 'Hero header image'}
          width={1000}
          height={1000}
          quality={100}
          className='w-full object-cover object-center 2xl:h-[700px] lg:h-[600px] md:h-[400px] sm:h-[300px]'
        />

        {Object.entries(heroDetailsData).map(([key, value]) => {
          return (
            <>
              {categoryParams === key && (
                <article
                  className='flex flex-col justify-center 2xl:pl-[15rem] lg:items-start lg:pl-[10rem] md:pl-[5rem] md:items-start sm:items-start sm:pl-[2rem] gap-5 
                  absolute top-0 bg-[#0000007c] h-full w-full text-white'
                >
                  <h1 className='lg:text-5xl md:text-4xl sm:text-2xl font-bold font-serif'>
                    {value.title}
                  </h1>
                  <p className='2xl:w-[25%] lg:w-[50%] lg:text-lg md:text-lg md:w-full sm:text-base sm:w-full font-medium '>
                    {value.description}
                  </p>

                  {value.button && (
                    <button
                      type='submit'
                      className='bg-white px-8 h-[50px] rounded-lg text-gray-500 gap-2 lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center sm:hidden '
                    >
                      {' '}
                      Submit to{' '}
                      <span className='font-medium text-black '>
                        {categoryParams}
                      </span>{' '}
                    </button>
                  )}
                </article>
              )}
            </>
          )
        })}
      </div>

      <div className=''>
        {isLoading && (
          <h1 className='flex justify-center items-center text-center lg:py-14 lg:text-5xl md:py-10 md:text-4xl sm:py-8 sm:text-3xl  '>
            Loading...
          </h1>
        )}
        {isFailed && (
          <h1 className='flex justify-center items-center text-center lg:py-14 lg:text-5xl md:py-10 md:text-4xl sm:py-8 sm:text-3xl  '>
            {errorMessage}
          </h1>
        )}
        {!isLoading && !isFailed && (
          <div className='flex flex-col justify-center items-center gap-5 py-8'>
            <section
              className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4 lg:w-[90%] lg:mx-auto lg:p-14 md:grid-cols-2 md:w-full md:p-10 md:gap-4 sm:grid-cols-1 
              sm:p-0 sm:py-10 sm:gap-14  '
            >
              {searchInput.length > 0 && searchResults.length > 0
                ? searchResults.map((img, index) => {
                    return (
                      <Link
                        href={`/${img.id}`}
                        onMouseOver={() => setShowOverlay(img.id)}
                        onMouseOut={() => setShowOverlay(null)}
                        onClick={() => handleImgClick(img.id)}
                        className='bg-gray-200 relative'
                        key={index}
                      >
                        <Image
                          src={img.urls?.regular}
                          alt='photos'
                          width={1000}
                          height={1000}
                          className={`lg:w-full lg:h-full object-cover cursor-pointer ${
                            img.width > img.height
                              ? 'lg:aspect-w-2 lg:aspect-h-3 md:w-full md:h-full sm:w-full sm:h-full'
                              : 'lg:aspect-w-3 lg:aspect-h-2 md:w-full md:h-full sm:w-full sm:h-full'
                          }`}
                        />
                        {showOverlay === img.id && (
                          <div className='absolute top-0 left-0 w-full h-full bg-[#00000054] flex flex-col justify-between z-10 '>
                            <div className='flex gap-4 ml-auto p-4'>
                              <button className='w-[40px] h-[40px] rounded-lg flex justify-center items-center p-2 bg-white font-medium '>
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                              <button className='w-[40px] h-[40px] rounded-lg flex justify-center items-center p-2 bg-white font-medium '>
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>

                            <div className='flex justify-between items-center p-3'>
                              <div className='flex flex-row justify-start items-center gap-2'>
                                <Image
                                  src={img?.user?.profile_image?.large}
                                  alt='photo'
                                  width={500}
                                  height={500}
                                  quality={100}
                                  className='lg:w-[40px] lg:h-[40px] sm:w-[40px] sm:h-[40px] rounded-full shadow-2xl border border-black '
                                />
                                <div className='flex flex-col'>
                                  <h4 className='text-sm text-white'>
                                    {img?.user?.first_name}{' '}
                                    {img?.user?.last_name}{' '}
                                  </h4>
                                  {img?.user?.for_hire === true ? (
                                    <span className='text-white text-sm'>
                                      Available for hire{' '}
                                      <FontAwesomeIcon icon={faCheckCircle} />
                                    </span>
                                  ) : (
                                    <span className='text-white text-sm'>
                                      Not available for hire{' '}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button className=''>
                                <FontAwesomeIcon icon={faArrowDown} />
                              </button>
                            </div>
                          </div>
                        )}
                      </Link>
                    )
                  })
                : photos.map((img, index) => {
                    return (
                      <Link
                        href={`/${img.id}`}
                        onMouseOver={() => setShowOverlay(img.id)}
                        onMouseOut={() => setShowOverlay(null)}
                        onClick={() => handleImgClick(img.id)}
                        className='bg-gray-200 relative'
                        key={index}
                      >
                        <Image
                          src={img.urls?.regular}
                          alt='photos'
                          width={1000}
                          height={1000}
                          className={`lg:w-full lg:h-full object-cover cursor-pointer ${
                            img.width > img.height
                              ? 'lg:aspect-w-2 lg:aspect-h-3 md:w-full md:h-full sm:w-full sm:h-full'
                              : 'lg:aspect-w-3 lg:aspect-h-2 md:w-full md:h-full sm:w-full sm:h-full'
                          }`}
                        />

                        {showOverlay === img.id && (
                          <div className='absolute top-0 left-0 w-full h-full bg-[#00000054] flex flex-col justify-between z-10 '>
                            <div className='flex gap-4 ml-auto p-4'>
                              <button className='w-[40px] h-[40px] rounded-lg flex justify-center items-center p-2 bg-white font-medium '>
                                <FontAwesomeIcon icon={faHeart} />
                              </button>
                              <button className='w-[40px] h-[40px] rounded-lg flex justify-center items-center p-2 bg-white font-medium '>
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>

                            <div className='flex justify-between items-center p-3'>
                              <div className='flex flex-row justify-start items-center gap-2'>
                                <Image
                                  src={img?.user?.profile_image?.large}
                                  alt='photo'
                                  width={500}
                                  height={500}
                                  quality={100}
                                  className='lg:w-[40px] lg:h-[40px] sm:w-[40px] sm:h-[40px] rounded-full shadow-2xl border border-black '
                                />
                                <div className='flex flex-col'>
                                  <h4 className='text-sm text-white'>
                                    {img?.user?.first_name}{' '}
                                    {img?.user?.last_name}{' '}
                                  </h4>
                                  {img?.user?.for_hire === true ? (
                                    <span className='text-white text-sm'>
                                      Available for hire{' '}
                                      <FontAwesomeIcon icon={faCheckCircle} />
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                              <button className='bg-gray-300 h-[40px] w-[40px] rounded-lg p-2 '>
                                <FontAwesomeIcon icon={faArrowDown} />
                              </button>
                            </div>
                          </div>
                        )}
                      </Link>
                    )
                  })}
            </section>
            <button
              onClick={loadMore}
              className='h-[50px] w-[150px] rounded-lg flex justify-center items-center bg-slate-950 text-white font-semibold '
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
