import React from 'react'

const HeaderNav = () => {
  return (
    <header
      className='lg:flex lg:justify-between lg:items-center lg:px-10 lg:h-[60px] lg:w-full md:flex md:justify-between md:items-center md:px-10
        md:h-[50px] sm:flex sm:justify-between sm:items-center sm:px-5 sm:h-[50px] shadow-lg bg-white '
    >
      <span className='font-medium text-[18px]'> Where in the world? </span>
      <button> Dark Mode </button>
    </header>
  )
}

export default HeaderNav
