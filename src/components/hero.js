const { useState, useRef, useEffect } = require('react')

import Image from 'next/image'
import {
  FaArrowDown,
  FaChevronDown,
  FaLongArrowAltDown,
  FaPlus,
} from 'react-icons/fa'
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiHeart2Fill,
  RiHeartFill,
} from 'react-icons/ri'

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

const Hero = () => {
  const [activeOption, setActiveOption] = useState(viewOptions[0])
  const categoriesRef = useRef(null)
  const [wallpaperUrl, setWallpaperUrl] = useState('')
  const [data, setData] = useState([])
  const [categoryPrams, setCategoryParams] = useState('wallpaper')
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [selectedImg, setSelectedImg] = useState(null)
  const [selectedImgDetails, setSelectedImgDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleImgClick = (imgUrl) => {
    setSelectedImg(imgUrl)
  }

  useEffect(() => {
    const apiUrl = `https://api.unsplash.com/photos/random?query=${categoryPrams}`

    fetch(apiUrl, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const url = data.urls?.full
        setWallpaperUrl(url)
        setData(data)
      })
      .catch((error) => console.error(error))
  }, [categoryPrams])

  /* The above code is using the `useEffect` hook in React to fetch photos from the Unsplash API. It is
fetching 10 photos per page and appending them to the `photos` state array using the `setPhotos`
function. The `page` variable is used to determine which page of photos to fetch. The
`Authorization` header is included in the fetch request to authenticate the API access using an
access key. The `useEffect` hook is triggered whenever the `page` variable changes. */
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.unsplash.com/photos/?page=${page}&per_page=10`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos((prevPhotos) => [...prevPhotos, ...data])
        setIsLoading(false)
      })
  }, [page])

  /* The above code is a React useEffect hook that fetches details of a selected image from the Unsplash
API. It sets the loading state to true, makes a GET request to the API endpoint for the selected
image using the access key, and then sets the selected image details state with the response data.
Finally, it sets the loading state to false. The useEffect hook is triggered whenever the
selectedImg state changes. */
  useEffect(() => {
    const fetchImgDetails = async () => {
      if (selectedImg) {
        setLoading(true)
        const response = await fetch(
          `https://api.unsplash.com/photos/${selectedImg}/`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
            },
          }
        )
        const data = await response.json()
        setSelectedImgDetails(data)
        setLoading(false)
      }
    }
    fetchImgDetails()
  }, [selectedImg])

  // console.log(selectedImgDetails, 'as selected details')

  const handleScrollLeft = () => {
    categoriesRef.current.scrollLeft -= 100
  }

  const handleScrollRight = () => {
    categoriesRef.current.scrollLeft += 100
  }

  /**
   * The function checks if the user has scrolled to the bottom of the page and updates the page number
   * accordingly.
   */
  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    if (windowHeight + scrollTop >= documentHeight) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className='w-full'>
      <div className='flex flex-row justify-between items-center lg:px-10 md:px-10 sm:px-5 divide-x divide-gray-300  '>
        <div className='flex flex-row lg:gap-5 md:gap-4 sm:gap-2'>
          {viewOptions.map((option) => (
            <button
              key={option}
              className={`lg:px-2 md:px-2 sm:px-1 font-medium ${
                activeOption === option ? 'text-gray-800' : 'text-gray-500'
              }`}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className='flex flex-row items-center lg:gap-8 overflow-hidden lg:px-4 md:px-4 md:gap-5 sm:gap-4 sm:px-1 '>
          <button
            className='text-gray-500 hover:text-gray-800 focus:outline-none w-[20px] '
            onClick={handleScrollLeft}
          >
            <RiArrowLeftSLine className='h-5 w-5' />
          </button>
          <div
            className='flex flex-row overflow-hidden py-2 lg:space-x-2lg:gap-5 md:space-x-2 md:gap-4 sm:gap-2 sm:space-x-1 '
            ref={categoriesRef}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={
                  categoryPrams === category
                    ? 'text-gray-500 font-medium border-b-2 border-black capitalize '
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
            <RiArrowRightSLine className='h-5 w-5' />
          </button>
        </div>
      </div>

      <div className='relative'>
        <Image
          src={wallpaperUrl}
          width={1000}
          height={1000}
          alt={data.alt_description}
          className='lg:w-full lg:h-[600px] md:h-[400px] md:w-full sm:h-[250px] object-cover '
          quality={100}
        />
        {categoryPrams === 'wallpaper' && (
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
                {categoryPrams}
              </span>{' '}
            </button>
          </section>
        )}
      </div>

      {isLoading ? (
        <span className=''> Loading... </span>
      ) : (
        <section
          className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4 lg:w-[90%] lg:mx-auto lg:p-14 md:grid-cols-2 md:w-full md:p-10 md:gap-4 sm:grid-cols-1 
        sm:p-0 sm:py-14 sm:gap-20  '
        >
          {photos.map((img, index) => {
            return (
              <div className='bg-gray-200 relative' key={img.id}>
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
                  onClick={() => handleImgClick(img.id)}
                />
                <div className='hover:absolute hover:top-0 hover:left-0 hover:h-full hover:w-full hover:bg-[#00000095] '></div>
              </div>
            )
          })}
        </section>
      )}

      {selectedImg && (
        <>
          <div
            className='fixed inset-0 z-40 bg-black opacity-75'
            onClick={() => setSelectedImg(null)}
          ></div>
          <section
            className='modal xl:h-[90%] lg:h-[90%] lg:w-[80%] md:w-[90%] md:h-[70%] md:left-1/2 sm:w-full sm:h-[70%] 
            m-auto flex flex-col justify-center items-center rounded-lg fixed top-1/2 lg:left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 z-50 bg-white py-5'
            onClick={() => setSelectedImg(null)}
          >
            {loading ? (
              <div className='text-center'>Loading...</div>
            ) : (
              <>
                <div className='flex justify-between items-center px-10 py-4 w-full'>
                  <div className='author flex flex-row justify-center items-center gap-2'>
                    <Image
                      src={selectedImgDetails?.user?.profile_image?.large}
                      alt='photo'
                      width={500}
                      height={500}
                      quality={100}
                      className='rounded-full w-[60px] h-[60px] '
                    />
                    <div className='flex flex-col'>
                      <h4 className=''>
                        {selectedImgDetails?.user?.first_name}{' '}
                        {selectedImgDetails?.user?.last_name}{' '}
                      </h4>
                      {selectedImgDetails?.user?.for_hire === true ? (
                        <span className='text-blue-500 text-base'>
                          Available for hire{' '}
                        </span>
                      ) : (
                        <span className='text-gray-400 text-base'>
                          Not available for hire{' '}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className='btns flex flex-row justify-center items-center lg:gap-2 md:gap-5'>
                    <button className='lg:h-[40px] w-auto lg:px-4 md:h-[50px] md:px-4 rounded-lg border-[1px] border-gray-400 '>
                      <RiHeartFill />
                    </button>
                    <button className='lg:h-[40px] w-auto lg:px-4 md:h-[50px] md:px-4 rounded-lg border-[1px] border-gray-400 '>
                      <FaPlus />
                    </button>
                    <div className='flex relative'>
                      <button className='lg:h-[40px] lg:w-[140px] lg:px-5 md:h-[50px] md:w-[150px] md:pl-3 rounded-lg flex flex-row justify-start items-center border-[1px] border-gray-400  '>
                        Download
                      </button>
                      <button className='border-l-[1px] border-gray-400 absolute top-0 right-0 h-full w-[40px] flex justify-center items-center '>
                        <FaChevronDown />
                      </button>
                    </div>
                  </div>
                </div>
                <Image
                  src={selectedImgDetails?.urls?.full}
                  alt={selectedImgDetails?.alt_description}
                  width={500}
                  height={500}
                  quality={100}
                  className={`object-contain ${
                    selectedImgDetails?.width > selectedImgDetails?.height
                      ? 'lg:h-[80%] w-full md:h-[80%] '
                      : 'w-auto lg:h-[80%] md:h-[80%] '
                  }`}
                  onLoad={() => setLoading(false)}
                />
                <div className='flex justify-between items-center px-10 py-4 w-full'>
                  <div className='grid grid-cols-3 gap-14'>
                    <div className=''>
                      <span className='text-gray-400 text-sm'>Views</span>
                      <p className='font-lg'> {selectedImgDetails?.views}</p>
                    </div>
                    <div className=''>
                      <span className='text-gray-400 text-sm'>Downloads</span>
                      <p className='font-lg'>
                        {' '}
                        {selectedImgDetails?.downloads}{' '}
                      </p>
                    </div>
                    <div className=''>
                      <span className='text-gray-400 text-sm'>Featured in</span>
                      <p className='font-lg'> featured in</p>
                    </div>
                  </div>

                  <div className='flex flex-row gap-2 justify-center items-center'>
                    <button className='lg:h-[40px] lg:w-[130px] lg:px-5 rounded-lg '>
                      share btn
                    </button>
                    <button className='lg:h-[40px] lg:w-[130px] lg:px-5 rounded-lg '>
                      info
                    </button>
                    <button className='lg:h-[40px] lg:w-[130px] lg:px-5 rounded-lg '>
                      dots
                    </button>
                  </div>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </main>
  )
}

export default Hero
