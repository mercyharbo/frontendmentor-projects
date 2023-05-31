const { useState, useRef, useEffect } = require('react')
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

import {
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setIsModalOpen, setSelectedImg } from '@/store/photosSlice'
import Link from 'next/link'

const viewOptions = ['Editorial', 'Following']

const categories = [
  'wallpaper',
  '3D Renders',
  'native',
  'travel',
  'Architecture & Interior',
  'Street Photograpy',
  'Texture & Patterns',
  'film',
  'experimental',
  'animals',
  'Fashion & Beauty',
  'Business & Work',
  'Food & Drink',
  'people',
  'sprituality',
  'athletics',
  'Health & Wellnesss',
  'Current Events',
  'Arts & Culture',
]

export default function Hero() {
  const dispatch = useDispatch()
  const [activeOption, setActiveOption] = useState(viewOptions[0])
  const categoriesRef = useRef(null)
  const [wallpaperUrl, setWallpaperUrl] = useState('')
  const [data, setData] = useState([])

  const perPage = 10
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState([])
  const [categoryParams, setCategoryParams] = useState('wallpaper')

  const [isLoading, setIsLoading] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const [showOverlay, setShowOverlay] = useState(false)

  const searchInput = useSelector((state) => state.searchSlice.searchInput)
  const searchResults = useSelector((state) => state.searchSlice.searchResults)

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
    setWallpaperUrl(data.urls.regular)
  }

  const fetchPhotos = async () => {
    setIsLoading(true)
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
      setPhotos([...photos, ...data.results])
      setIsFailed(false)
      setIsLoading(false)
      setPage((prevPage) => prevPage + 1)
    } else {
      setErrorMessage('Failed to load photos')
      setIsFailed(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPhotos()
    fetchRandomPhoto(categoryParams)
  }, [categoryParams])

  const loadMore = () => {
    setIsLoading(true)
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
      <div className='flex flex-row justify-between items-center lg:px-10 md:px-10 sm:px-5 divide-x divide-gray-300 py-3  '>
        <div className='flex flex-row lg:gap-5 md:gap-4 sm:gap-2'>
          {viewOptions.map((option) => (
            <button
              key={option}
              className={`lg:px-2 md:px-2 sm:px-1 font-medium lg:text-base md:text-base sm:text-sm ${
                activeOption === option ? 'text-gray-800' : 'text-gray-500'
              }`}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className='flex flex-row items-center lg:gap-8 overflow-hidden lg:px-4 md:px-4 md:gap-5 sm:gap-2 sm:px-1 '>
          <button
            className='text-gray-500 hover:text-gray-800 focus:outline-none w-[20px] '
            onClick={handleScrollLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div
            className='flex flex-row overflow-hidden py-2 lg:space-x-2lg:gap-5 md:space-x-2 md:gap-4 sm:gap-2 sm:space-x-1 '
            ref={categoriesRef}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={
                  categoryParams === category
                    ? 'text-gray-500 font-medium border-b-2 border-black capitalize lg:text-base md:text-base sm:text-sm '
                    : 'text-gray-500 text-sm font-medium capitalize '
                }
                style={{ whiteSpace: 'nowrap' }}
                onClick={() => setCategoryParams(category)}
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
        {wallpaperUrl && (
          <Image
            src={wallpaperUrl}
            alt={data.alt_description || 'Wallpaper'}
            width={1000}
            height={1000}
            quality={100}
            className='w-full 2xl:h-[700px] lg:h-[600px] md:h-[400px] sm:h-[300px] object-fit'
          />
        )}
        {categoryParams === 'wallpaper' && (
          <section
            className='flex flex-col justify-center lg:items-start lg:p-20 md:p-20 md:items-start sm:p-5 sm:items-start gap-5 
          absolute top-0 bg-[#0000007c] h-full w-full text-white'
          >
            <h1 className='lg:text-4xl md:text-4xl sm:text-2xl font-bold font-serif'>
              {' '}
              Wallpapers{' '}
            </h1>
            <p className='lg:w-[50%] lg:text-lg md:text-lg md:w-full sm:text-base sm:w-full font-medium '>
              {' '}
              From epic drone shots to inspiring moments in nature — submit your
              best desktop and mobile backgrounds.{' '}
            </p>
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
          </section>
        )}
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
                                    </span>
                                  ) : (
                                    <span className='text-white text-sm'>
                                      Not available for hire{' '}
                                    </span>
                                  )}
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
