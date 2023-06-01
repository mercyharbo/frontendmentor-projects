import Layout from '@/components/Layout'
import {
  setIsLoading,
  setIsModalOpen,
  setSelectedImg,
  setSelectedPhotosDetails,
} from '@/store/photosSlice'
import {
  faCalendar,
  faCamera,
  faCheckCircle,
  faChevronDown,
  faCircleExclamation,
  faEllipsis,
  faHeart,
  faPlus,
  faShare,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PhotoDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  const selectedImg = useSelector((state) => state.photosSlice.selectedImg)
  const isLoading = useSelector((state) => state.photosSlice.isLoading)
  const selectedImgDetails = useSelector(
    (state) => state.photosSlice.selectedPhotoDetails
  )

  /* The above code is a React useEffect hook that fetches details of a selected image from the Unsplash
API. It sets the loading state to true, makes a GET request to the API endpoint for the selected
image using the access key, and then sets the selected image details state with the response data.
Finally, it sets the loading state to false. The useEffect hook is triggered whenever the
selectedImg state changes. */
  useEffect(() => {
    const fetchImgDetails = async () => {
      if (selectedImg) {
        const response = await fetch(`https://api.unsplash.com/photos/${id}/`, {
          headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
          },
        })
        const data = await response.json()
        dispatch(setSelectedPhotosDetails(data))
        dispatch(setIsLoading(false))
      }
    }
    fetchImgDetails()
  }, [id, dispatch, selectedImg])

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', options)
  }

  const handleDownload = async (photoId) => {
    // const selectedPhoto = selectedImgDetails.find((img) => img.id === photoId)

    if (selectedImgDetails) {
      const downloadUrl = selectedImgDetails.urls.full
      const response = await fetch(downloadUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `photo_${selectedImgDetails.id}.jpg`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  if (isLoading) {
    return <p className='text-2xl p-4'>Loading...</p>
  }

  return (
    <Layout>
      <section className='w-full h-full flex flex-col bg-white py-5 '>
        <div className='flex lg:px-10 py-4 w-full lg:justify-between lg:items-center lg:flex-row md:flex-row md:justify-between sm:flex-col sm:gap-5 sm:px-5'>
          <div className='flex flex-row justify-start items-center gap-2'>
            <Image
              src={selectedImgDetails?.user?.profile_image?.large}
              alt='photo'
              width={500}
              height={500}
              quality={100}
              className='lg:w-[60px] lg:h-[60px] sm:w-[40px] sm:h-[40px] rounded-full shadow-2xl border border-black '
            />
            <div className='flex flex-col'>
              <h4 className='text-base'>
                {selectedImgDetails?.user?.first_name}{' '}
                {selectedImgDetails?.user?.last_name}{' '}
              </h4>
              {selectedImgDetails?.user?.for_hire === true ? (
                <span className='text-blue-500 text-sm'>
                  Available for hire{' '}
                  <FontAwesomeIcon icon={faCheckCircle} color='blue' />
                </span>
              ) : null}
            </div>
          </div>

          <div className='flex flex-row justify-between items-center lg:gap-2 md:gap-5 '>
            <div className='flex justify-start items-center gap-5 sm:gap-3'>
              <button
                className='lg:h-[40px] w-auto lg:px-4 md:h-[40px] md:w-[40px] md:px-4 sm:h-[40px] sm:w-[40px] rounded-lg border-[1px] border-gray-400
                flex justify-center items-center '
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button
                className='lg:h-[40px] w-auto lg:px-4 md:h-[40px] md:w-[40px] md:px-4 sm:h-[40px] sm:w-[40px] rounded-lg border-[1px] border-gray-400
                flex justify-center items-center '
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleDownload(selectedImgDetails.id)
              }}
              className=' relative lg:h-[40px] lg:w-[140px] lg:px-5 md:h-[40px] md:w-[130px] md:pl-3 sm:h-[40px] sm:w-[120px] sm:px-2 rounded-lg 
              flex flex-row justify-start items-center border-[1px] border-gray-400  '
            >
              Download
              <span className='border-l-[1px] border-gray-400 absolute top-0 right-0 h-full w-[40px] flex justify-center items-center sm:w-[35px] '>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className='text-gray-400'
                />
              </span>
            </button>
          </div>
        </div>

        <Image
          src={selectedImgDetails?.urls?.full || ''}
          alt={selectedImgDetails?.alt_description || 'Picture'}
          width={500}
          height={500}
          quality={100}
          className={`object-contain ${
            selectedImgDetails?.width > selectedImgDetails?.height
              ? 'aspect-w-2 aspect-h-3 2xl:h-[50rem] lg:h-[35rem] md:h-full sm:h-full object-contain mx-auto'
              : 'aspect-w-3 aspect-h-2 2xl:h-[50rem] lg:h-[35rem] md:h-full sm:h-full object-contain mx-auto'
          }`}
          onLoad={() => dispatch(setIsLoading(false))}
        />

        <div className='flex justify-between items-start lg:px-10 sm:px-5 py-6 w-full'>
          <div className='grid lg:grid-cols-3 lg:gap-14 md:grid-cols-3 md:gap-5 sm:grid-cols-1 sm:gap-5'>
            <div className=''>
              <span className='text-gray-400 text-sm'>Views</span>
              <p className='font-lg'> {selectedImgDetails?.views}</p>
            </div>
            <div className=''>
              <span className='text-gray-400 text-sm'>Downloads</span>
              <p className='font-lg'> {selectedImgDetails?.downloads} </p>
            </div>
            <div className='lg:flex flex-col md:flex sm:hidden'>
              <span className='text-gray-400 text-sm '>Featured in</span>
              <p className='font-lg'> featured in</p>
            </div>
          </div>

          <div className='flex flex-row gap-2 justify-center'>
            <button className='lg:h-[40px] lg:w-[120px] lg:px-5 rounded-lg flex justify-center items-center gap-3 border p-2 '>
              <FontAwesomeIcon icon={faShare} />
              <span className='lg:flex md:flex sm:hidden'>Share</span>
            </button>
            <button className='lg:h-[40px] lg:w-[120px] lg:px-5 rounded-lg flex justify-center items-center gap-3  border p-2 '>
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span className='lg:flex md:flex sm:hidden'>Share</span>
            </button>
            <button className='lg:h-[40px] lg:w-[50px] lg:px-5 rounded-lg border flex justify-center items-center p-2 '>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
        </div>

        <div className='flex flex-col justify-start items-start gap-2 text-gray-400 text-sm lg:px-10 md:px-5 sm:px-5'>
          <p className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} />
            Published on {formatDate(selectedImgDetails?.created_at)}{' '}
          </p>
          <p className='flex items-center gap-2'>
            {' '}
            <FontAwesomeIcon icon={faCamera} />
            FUJIFILM, X-T2{' '}
          </p>
          <p className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faShieldVirus} />
            Free to use under the Unsplash License
          </p>
        </div>

        <article className='flex justify-center items-center gap-5 flex-wrap py-4 px-5 '>
          {selectedImgDetails?.tags?.map((tag) => {
            return (
              <p className='bg-gray-500 capitalize p-2 text-white rounded-lg text-sm'>
                {' '}
                {tag.title}
              </p>
            )
          })}
        </article>

        <article
          className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4 lg:w-[90%] lg:mx-auto lg:p-14 md:grid-cols-2 md:w-full md:p-10 md:gap-4 sm:grid-cols-1 
              sm:p-0 sm:py-8 sm:gap-14'
        >
          {selectedImgDetails?.related_collections?.results?.map((img) => {
            return (
              <Link key={img.id} href={`/${img.id}`}>
                <Image
                  src={img?.preview_photos?.[0]?.urls?.full || ''}
                  alt={img?.preview_photos?.[0]?.alt_description || 'Picture'}
                  width={500}
                  height={500}
                  quality={100}
                  className={`lg:w-full lg:h-full object-cover cursor-pointer ${
                    img.cover_photo.width > img.cover_photo.height
                      ? 'lg:aspect-w-2 lg:aspect-h-3 md:w-full md:h-full sm:w-full sm:h-full'
                      : 'lg:aspect-w-3 lg:aspect-h-2 md:w-full md:h-full sm:w-full sm:h-full'
                  }`}
                />
              </Link>
            )
          })}
        </article>
      </section>
    </Layout>
  )
}

export default PhotoDetails
